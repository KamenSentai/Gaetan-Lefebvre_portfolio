<template lang="pug">
header.Header(v-bind:class="[`Header--${color || data.colors[range]}`, `Header--${shape || data.shapes[range]}`]")
  .Header-topbar(v-bind:class="isNavigating ? 'is-toggled' : ''")
    .Header-navigation(v-bind:class="isNavigating ? 'is-toggled' : ''")
      .Header-subnav
        .Header-tree
          nuxt-link.Header-branch.Cursor-frame--increase(
            v-bind:class="$nuxt.$route.path === '/' ? `is-active--${color || data.colors[range]}` : ''"
            :to="{ name: 'index', params: sendData() }"
          ) Home
          nuxt-link.Header-branch.Cursor-frame--increase(
            v-bind:class="$nuxt.$route.path === '/projects' ? `is-active--${color || data.colors[range]}` : ''"
            :to="{ name: 'projects', params: sendData() }"
          ) Projects
          nuxt-link.Header-branch.Cursor-frame--increase(
            v-bind:class="$nuxt.$route.path === '/about' ? `is-active--${color || data.colors[range]}` : ''"
            :to="{ name: 'about', params: sendData() }"
          ) About
          a.Header-branch.Cursor-frame--increase(href="mailto:gaetan.lefebvre@hetic.net") Contact
          .Header-branch.Header-branch--more
            a.Cursor-frame--increase(href="#") LinkedIn
            a.Cursor-frame--increase(href="#") Dribbble
            a.Cursor-frame--increase(href="#") Instagram
    .Header-mainnav(v-bind:class="[isNavigating ? 'is-toggled' : '', isMenu ? 'is-hidden': '']" :data-navigating="isNavigating ? 'true' : 'false'")
      nuxt-link.Header-logo(v-bind:class="isNavigating ? 'is-toggled' : ''" :to="{ name: 'index', params: sendData() }")
        Logo.Header-logo(:color="color || data.colors[range]")
      ul.Header-navbar
        li.Header-item.Cursor-frame--increase(:class="hasProject ? '': 'is-hidden'")
          a.Cursor-frame--increase(href="#" @click="toggleMenu") All projects
        li.Header-item.Cursor-frame--increase(:class="hasAbout ? '': 'is-hidden'")
          nuxt-link.Cursor-frame--increase(:to="{ name: 'about', params: sendData() }") About
        li.Header-item.Cursor-frame--increase(:class="hasHome ? '': 'is-hidden'")
          nuxt-link.Cursor-frame--increase(:to="{ name: 'index', params: sendData() }") Return home
      .Header-burger.Cursor-frame--increase(v-bind:class="isNavigating ? 'is-active' : ''" @click="toggleNavigation")
        .Header-stripe.Cursor-frame--increase
        .Header-stripe.Cursor-frame--increase
        .Header-stripe.Cursor-frame--increase
  .Header-jumbotron
    Hero.Header-hero(
      :class="type === 'about' ? 'Header-scrollable' : ''"
      v-if="jumbotron === 'hero'"
      :type="type"
      :data="data"
      :range="range"
    )
    Carousel.Header-carousel(
      v-if="jumbotron === 'carousel'"
      :isMenu="isMenu"
      :range="parseInt(slide) || range"
      :slide="slide"
    )
    Error.Header-error(
      v-else-if="jumbotron === 'error'"
      :shape="shape"
    )
  Menu
</template>

<script>
import Logo from './Logo'
import Menu from './Menu'
import Hero from './Hero'
import Carousel from './Carousel'
import Error from './Error'

export default {
  data() {
    return {
      range: 0,
      isNavigating: false,
      isMenu: false,
      isToggable: true,
      isTurnable: true,
      route: ''
    }
  },
  props: [
    'color',
    'shape',
    'index',
    'jumbotron',
    'type',
    'hasProject',
    'hasAbout',
    'hasHome',
    'data',
    'slide'
  ],
  components: {
    Logo,
    Menu,
    Hero,
    Carousel,
    Error
  },
  methods: {
    sendData: function() {
      return {
        color: this.color || this.data.colors[this.range],
        shape: this.shape || this.data.shapes[this.range],
        from: this.$route.name
      }
    },
    toggleNavigation: function() {
      if (this.isToggable) {
        this.isToggable = false
        this.isNavigating = !this.isNavigating

        if (this.isNavigating) {
          document.body.style.overflow = 'hidden'
          document.querySelector('.Mouse').dataset.forced = 'white'
          this.$el.querySelector('.Header-navigation').style.zIndex = '1000'
        } else {
          document.body.style.overflow = 'auto'
          document.querySelector('.Mouse').dataset.forced = 'none'
          setTimeout(() => {
            this.$el.querySelector('.Header-navigation').style.zIndex = '0'
          }, 2000)
        }

        setTimeout(() => {
          this.isToggable = true
        }, 2000)
      }
    },
    toggleMenu: function(event) {
      event.preventDefault()
      this.isMenu = true

      setTimeout(() => {
        const _menu = this.$el.querySelector('.Menu')
        _menu.classList.add('is-locked')
        _menu.classList.add('is-active')
        setTimeout(() => {
          _menu.classList.add('is-loading')
          setTimeout(() => {
            _menu.classList.remove('is-locked')
            _menu.classList.add('is-loaded')

            const _backMenu = _menu.querySelector('.Menu-back')
            const _carousel = this.$el.querySelector('.Carousel')
            const _containerCarousel = _carousel.querySelector('.Carousel-container')
            const _barsCarousel = Array.from(_carousel.querySelectorAll('.Carousel-bar'))
            let _containerOffset = _containerCarousel.offsetTop

            const turnMenu = () => {
              setTimeout(() => {
                for (const _barCarousel of _barsCarousel) {
                  _barCarousel.classList.remove('is-hidden')
                  _barCarousel.classList.add('is-visible')
                  _barCarousel.style.top = `${_containerOffset}px`
                }
                setTimeout(() => {
                  this.isMenu = false
                  for (const _barCarousel of _barsCarousel) {
                    _barCarousel.classList.remove('is-visible')
                  }
                  _backMenu.removeEventListener('click', turnMenu)
                }, 1000)
              }, 1000)
            }

            _backMenu.addEventListener('click', turnMenu)
          }, 1250)
        }, 250)
        document.body.style.overflow = 'hidden'
      }, 1000)
    },
    modulo: (n, m) => {
      return ((n % m) + m) % m;
    }
  },
  beforeMount() {
    if (this.index && this.index >= 0) this.range = this.index
    this.route = this.$router.currentRoute.name
  },
  mounted() {
    const _headerScrollable = this.$el.querySelector('.Header-scrollable')
    const _headerCarousel = this.$el.querySelector('.Header-carousel')

    if (_headerScrollable) {
      const _heroShape = this.$el.querySelector('.Hero-shape.is-active')
      const _heroLayers = this.$el.querySelector('.Hero-front.is-active') || this.$el.querySelector('.Hero-back')
      const _shapeStyle = _heroShape.currentStyle || window.getComputedStyle(_heroShape)
      const _layersStyle = _heroLayers.currentStyle || window.getComputedStyle(_heroLayers)
      const _shapeDurationDelay = parseFloat(_shapeStyle.transitionDuration) + parseFloat(_shapeStyle.transitionDelay)
      const _layersDurationDelay = parseFloat(_layersStyle.transitionDuration) + parseFloat(_layersStyle.transitionDelay)
      const timeoutDelay = Math.max(_shapeDurationDelay, _layersDurationDelay) * 1000

      let initialX = null
      let initialY = null

      const startTouch = event => {
        initialX = event.touches[0].clientX
        initialY = event.touches[0].clientY
      }

      const moveTouch = event => {
        event.preventDefault()

        if (initialX === null || initialY === null) return

        let currentX = event.touches[0].clientX
        let currentY = event.touches[0].clientY

        let diffX = initialX - currentX
        let diffY = initialY - currentY

        if (Math.abs(diffX) < Math.abs(diffY)) {
          if (diffY > 0) this.range = this.modulo(this.range + 1, this.data.colors.length)
          else this.range = this.modulo(this.range - 1, this.data.colors.length)

          _headerScrollable.removeEventListener('touchmove', moveTouch)
          setTimeout(() => {
            _headerScrollable.addEventListener('touchmove', moveTouch)
          }, timeoutDelay)
        }

        initialX = null
        initialY = null
      }

      const scrollJumbotron = event => {
        if (event.deltaY < 0) this.range = this.modulo(this.range - 1, this.data.colors.length)
        else if (event.deltaY > 0) this.range = this.modulo(this.range + 1, this.data.colors.length)

        _headerScrollable.removeEventListener('wheel', scrollJumbotron)
        setTimeout(() => {
          _headerScrollable.addEventListener('wheel', scrollJumbotron)
        }, timeoutDelay)
      }

      _headerScrollable.addEventListener('touchstart', startTouch)
      _headerScrollable.addEventListener('touchmove', moveTouch)
      _headerScrollable.addEventListener('wheel', scrollJumbotron)
      _headerScrollable.addEventListener('wheel', event => {
        event.preventDefault()
      })
    }

    if (_headerCarousel && !this.slide) {
      const _heroCarouselButtonLeft = _headerCarousel.querySelector('.Carousel-button--left')
      const _heroCarouselButtonRight = _headerCarousel.querySelector('.Carousel-button--right')
      const _headerCarouselStyle = _headerCarousel.currentStyle || window.getComputedStyle(_headerCarousel)

      let initialX = null
      let initialY = null

      const decreaseRange = () => {
        if (this.isTurnable) {
          this.isTurnable = false
          this.range = this.modulo(this.range - 1, this.data.projects.length);
          setTimeout(() => {
            this.isTurnable = true
          }, 1000)
        }
      }

      const increaseRange = () => {
        if (this.isTurnable) {
          this.isTurnable = false
          this.range = this.modulo(this.range + 1, this.data.projects.length);
          setTimeout(() => {
            this.isTurnable = true
          }, 1000)
        }
      }

      const startTouch = event => {
        if (_headerCarouselStyle.userSelect === 'none') {
          initialX = event.touches[0].clientX
          initialY = event.touches[0].clientY
        }
      }

      const moveTouch = event => {
        if (_headerCarouselStyle.userSelect === 'none') {
          event.preventDefault()

          if (initialX === null || initialY === null) return

          let currentX = event.touches[0].clientX
          let currentY = event.touches[0].clientY

          let diffX = initialX - currentX
          let diffY = initialY - currentY

          if (Math.abs(diffX) < Math.abs(diffY)) {
            if (diffY > 0) increaseRange()
            else decreaseRange()
          }

          initialX = null
          initialY = null
        }
      }

      _heroCarouselButtonLeft.addEventListener('click', decreaseRange)
      _heroCarouselButtonRight.addEventListener('click', increaseRange)
      _headerCarousel.addEventListener('touchstart', startTouch)
      _headerCarousel.addEventListener('touchmove', moveTouch)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';
@import '~assets/styles/tools/mixins';

.Header {
  $rootHeader: &;
  $burger-width: 4rem;
  $burger-height: 3rem;

  @each $key, $value in $colors {
    &--#{$key} {
      *::selection {
        color: $white;
        background-color: $value;
      }

      .Logo-lastname {
        fill: $value !important;
      }
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: $white;
  background-color: $black;
  overflow: hidden;

  &-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: grid(12);
    margin-top: $margin-s;
    margin-bottom: $margin-r;
    transition: margin-bottom $easing-duration;
    transition-delay: 1s;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100vw;
      height: $margin-s + $margin-r;
      background-color: $black;
      opacity: 0;
      transition: opacity $easing-duration;
      transition-delay: 1s;
      will-change: opacity;
      pointer-events: none;

      @media (max-width: #{grid-media(6)}) {
        height: $margin-s + $margin-s;
      }
    }

    @media (max-width: #{grid-media(6)}) {
      margin-bottom: $margin-s;

      &.is-toggled {
        margin-bottom: $margin-r + $margin-s;
        transition-delay: 0s;

        &::before {
          opacity: 1;
          transition-delay: 0s;
          pointer-events: auto;
        }
      }
    }
  }

  &-logo {
    opacity: 1;
    transform-origin: 50% 50%;
    transition: opacity $easing-duration, transform $easing-duration;
    transition-delay: 1s;
    will-change: opacity, transform;

    &:hover {
      @media (min-width: #{grid-media(6)}) {
        transform: rotateZ(-90deg);
        transition-delay: 0s;
      }
    }

    @media (max-width: #{grid-media(6)}) {
      &.is-toggled {
        opacity: 0;
        transform: translateY(-#{$margin-s});
        transition-delay: 0s;
        pointer-events: none;
      }
    }
  }

  &-navbar {
    display: flex;
    flex-direction: row;
    user-select: none;

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    margin-left: $margin-s;
    font-weight: 700;
    opacity: 1;
    transition: color $easing-duration;

    &:first-child {
      margin-left: 0;
    }

    &.is-hidden {
      width: 0;
      margin: 0;
      opacity: 0;
      pointer-events: none;

      a {
        cursor: default;
      }
    }
  }

  &-navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    display: none;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - #{$margin-s + $margin-s});

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-color: $black;
      opacity: 0;
      transition: opacity $easing-duration;
      transition-delay: 1s;
      will-change: opacity;
    }

    &::after {
      bottom: 0;
      left: calc(50vw - .1rem);
      width: .1rem;
      height: 100vh;
      background-color: $dark;
      transform-origin: 50% 0;
      transform: scaleY(0);
      transition: transform $easing-duration;
      transition-delay: 0s;
      will-change: transform;
    }

    &.is-toggled {
      &::before {
        opacity: 1;
        transition-delay: 0s;
      }

      &::after {
        transform: scaleY(1);
        transition-delay: 1s;
      }

      #{$rootHeader}-subnav {
        &::before {
          z-index: -1;
        }
      }

      #{$rootHeader}-branch {
        opacity: 1;
        transform: none;

        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            transition-delay: 1s + $i * .125s;
          }
        }
      }
    }

    @media (max-width: #{grid-media(6)}) {
      display: flex;
    }
  }

  &-mainnav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: grid(12);
    transition: opacity $easing-duration, transform $easing-duration;
    height: 0;
    z-index: 500;
    will-change: opacity, transform;

    &.is-hidden {
      opacity: 0;
      transform: translateY(- #{$margin-t});
      transition-delay: 0s;
      pointer-events: none;
    }

    &[data-navigating="false"] {
      &[data-color="white"] {
          color: $white;

        #{$rootHeader}-stripe {
          background-color: $white;
        }
      }

      &[data-color="black"] {
        color: $black;

        #{$rootHeader}-stripe {
          background-color: $black;
        }
      }
    }
  }

  &-subnav {
    position: relative;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    @include grid-scale(12);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }
  }

  &-burger {
    z-index: 1;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: $burger-width;
    height: $burger-height;
    cursor: pointer;

    &:hover {
      #{$rootHeader}-stripe {
        transform: scaleX(.75);

        &:first-child,
        &:last-child {
          transform: scaleX(1);
        }
      }
    }

    &.is-active {
      #{$rootHeader}-stripe {
        transform: scaleX(0);

        &:first-child {
          transform: rotateZ(-30deg);
        }

        &:last-child {
          transform: rotateZ(30deg);
        }
      }
    }

    @media (max-width: #{grid-media(6)}) {
      display: flex;
    }
  }

  &-stripe {
    height: .1rem;
    width: $burger-width;
    background-color: $white;
    transform-origin: 100% 0;
    transform: scaleX(1);
    transition: background-color $easing-duration, transform $easing-duration;
    will-change: transform;

    &:first-child,
    &:last-child {
      transform: scaleX(.75);
    }
  }

  &-tree {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    margin-top: $margin-s;
    padding-top: $margin-t;
    font-size: 2.8rem;
    font-weight: 700;

    @media (max-height: #{grid-media(8)}) {
      padding-top: 0;
    }

    @media (max-height: #{grid-media(6)}) {
      margin-top: $margin-t;
    }

    @media (max-height: #{grid-media(4)}) {
      margin-top: 0;
      font-size: 2.4rem;
    }
  }

  &-branch {
    margin: auto;
    opacity: 0;
    transform: translateY(#{$margin-t});
    transition: opacity $easing-duration, transform $easing-duration;
    will-change: opacity, transform;

    &--more {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: $margin-m;
      margin-bottom: $margin-s;
      font-size: 1.2rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: .125em;

      @media (max-height: #{grid-media(6)}) {
        margin-top: $margin-r;
      }

      @media (max-height: #{grid-media(5)}) {
        margin-top: $margin-s;
      }

      @media (max-height: #{grid-media(4)}) {
        margin-top: $margin-t;
      }
    }

    &.is-active {
      @each $key, $value in $colors {
        &--#{$key} {
          color: $value;
        }
      }
    }
  }

  &-jumbotron {
    display: flex;
    justify-content: space-between;
    flex: 1 0 calc(100% - #{$margin-s + $margin-r});
    width: grid(12);
  }

  &-topbar,
  &-mainnav,
  &-jumbotron {
    @include grid-scale(12);
  }

  &-carousel {
    @media (max-width: #{grid-media(6)}) {
      user-select: none;
    }
  }
}
</style>
