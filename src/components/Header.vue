<template lang="pug">
header.Header(v-bind:class="`Header--${color || data.colors[range]}`")
  .Header-topbar(v-bind:class="isNavigating ? 'is-toggled' : ''")
    .Header-navigation(v-bind:class="isNavigating ? 'is-toggled' : ''")
      .Header-subnav
        .Header-burger(v-bind:class="isNavigating ? 'is-active' : ''" @click="toggleNavigation")
          .Header-stripe
          .Header-stripe
          .Header-stripe
        .Header-tree
          router-link.Header-branch(
            v-bind:class="route === 'home' ? `is-active--${color || data.colors[range]}` : ''"
            :to="{ name: 'home', params: sendData() }"
          ) Home
          router-link.Header-branch(
            v-bind:class="route === 'projects' ? `is-active--${color || data.colors[range]}` : ''"
            :to="{ name: 'projects', params: sendData() }"
          ) Projects
          router-link.Header-branch(
            v-bind:class="route === 'about' ? `is-active--${color || data.colors[range]}` : ''"
            :to="{ name: 'about', params: sendData() }"
          ) About
          a(href="mailto:gaetan.lefebvre@hetic.net").Header-branch Contact
          .Header-branch.Header-branch--more
            a(href="#") LinkedIn
            a(href="#") Dribbble
            a(href="#") Instagram
    router-link.Header-logo(v-bind:class="isNavigating ? 'is-toggled' : ''" :to="{ name: 'home', params: sendData() }")
      Logo(:color="color || data.colors[range]")
    ul.Header-navbar
      li.Header-item(:class="project ? 'is-hidden': ''")
        a(href="#" @click="toggleMenu") Projects
      li.Header-item
        router-link(:to="{ name: 'about', params: sendData() }") About
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
    'project',
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
        shape: this.shape || this.data.shapes[this.range]
      }
    },
    toggleNavigation: function() {
      if (this.isToggable) {
        this.isToggable = false
        this.isNavigating = !this.isNavigating

        if (this.isNavigating) {
          this.$el.querySelector('.Header-navigation').style.zIndex = '1000'
        } else {
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
      if (!this.project) document.querySelector('.Menu').classList.add('is-active')
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

      const scrollJumbotron = event => {
        if (event.deltaY < 0) this.range = this.modulo(this.range - 1, this.data.colors.length)
        else if (event.deltaY > 0) this.range = this.modulo(this.range + 1, this.data.colors.length)

        _headerScrollable.removeEventListener('wheel', scrollJumbotron)

        setTimeout(() => {
          _headerScrollable.addEventListener('wheel', scrollJumbotron)
        }, timeoutDelay)
      }

      _headerScrollable.addEventListener('wheel', scrollJumbotron)
      _headerScrollable.addEventListener('wheel', event => {
        event.preventDefault()
      })
    }

    if (_headerCarousel && !this.slide) {
      const _heroCarouselButtonLeft = _headerCarousel.querySelector('.Carousel-button--left')
      const _heroCarouselButtonRight = _headerCarousel.querySelector('.Carousel-button--right')

      _heroCarouselButtonLeft.addEventListener('click', () => {
        if (this.isTurnable) {
          this.isTurnable = false
          this.range = this.modulo(this.range - 1, this.data.projects.length);
          setTimeout(() => {
            this.isTurnable = true
          }, 1000)
        }
      })

      _heroCarouselButtonRight.addEventListener('click', () => {
        if (this.isTurnable) {
          this.isTurnable = false
          this.range = this.modulo(this.range + 1, this.data.projects.length);
          setTimeout(() => {
            this.isTurnable = true
          }, 1000)
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';
@import '../styles/tools/mixins';

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
    transition: margin-bottom $easing;
    transition-delay: 1s;

    @media (max-width: #{grid-media(6)}) {
      &.is-toggled {
        margin-bottom: $margin-r + $margin-s;
        transition-delay: 0s;
      }
    }
  }

  &-logo {
    transition: transform $easing;
    transition-delay: 1s;
    will-change: transform;

    @media (max-width: #{grid-media(6)}) {
      &.is-toggled {
        transform: translateY(-#{$margin-s});
        transition-delay: 0s;
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
    font-size: 1.8rem;
    margin-right: $margin-s;
    font-weight: 700;
    opacity: 1;

    &:last-child {
      margin-right: 0;
    }

    &.is-hidden {
      opacity: 0;

      a {
        cursor: default;
      }
    }
  }

  &-navigation {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      height: 100vh;
    }

    &::before {
      left: 0;
      width: 100vw;
      background-color: $black;
      opacity: 0;
      transition: opacity $easing;
      transition-delay: 1s;
      will-change: opacity;
    }

    &::after {
      left: calc(50vw - .1rem);
      width: .1rem;
      background-color: $dark;
      transform-origin: 50% 0;
      transform: scaleY(0);
      transition: transform $easing;
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

  &-subnav {
    position: relative;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    @include grid-scale(12);
    margin-top: $margin-s;

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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: $burger-width;
    height: $burger-height;
    margin-top: - $burger-height / 2;
    margin-right: 0;
    margin-left: auto;
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
  }

  &-stripe {
    height: .1rem;
    width: $burger-width;
    background-color: $white;
    transform-origin: 100% 0;
    transform: scaleX(1);
    transition: transform $easing;
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
    font-size: 2.8rem;
    font-weight: 700;
  }

  &-branch {
    margin: auto;
    opacity: 0;
    transform: translateY(#{$margin-t});
    transition: opacity $easing, transform $easing;
    will-change: opacity, transform;

    &--more {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: $margin-r;
      margin-bottom: $margin-s;
      font-size: 1.2rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: .125em;
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
  &-jumbotron {
    @include grid-scale(12);
  }
}
</style>
