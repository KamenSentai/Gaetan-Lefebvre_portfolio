<template lang="pug">
header.Header(v-bind:class="`Header--${color || data.colors[range]}`")
  .Header-topbar(v-bind:class="isNavigating ? 'is-toggled' : ''")
    router-link.Header-logo(v-bind:class="isNavigating ? 'is-toggled' : ''" :to="{ name: 'home', params: sendData() }")
      Logo(:color="color || data.colors[range]")
    ul.Header-navbar
      li.Header-item(:class="project ? 'is-hidden': ''")
        a(href="#" @click="toggleMenu") Projects
      li.Header-item
        router-link(:to="{ name: 'about', params: sendData() }") About
    .Header-navigation(v-bind:class="isNavigating ? 'is-toggled' : ''")
      .Header-subnav
        .Header-burger(v-bind:class="isNavigating ? 'is-active' : ''" @click="toggleNavigation")
          .Header-stripe
          .Header-stripe
          .Header-stripe
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
      :data="data"
      :range="range"
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
      isNavigating: false
    }
  },
  props: [
    'color',
    'shape',
    'index',
    'jumbotron',
    'type',
    'project',
    'data'
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
      this.isNavigating = !this.isNavigating
    },
    toggleMenu: function(event) {
      event.preventDefault()
      if (!this.project) document.querySelector('.Menu').classList.add('is-active')
    },
    modulo: (n, m) => {
      return ((n % m) + m) % m;
    },
  },
  beforeMount() {
    if (this.index && this.index >= 0) this.range = this.index
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

      const scrollJumbotron = () => {
        this.range = (this.range + 1) % this.data.colors.length
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

    if (_headerCarousel) {
      const _heroCarouselButtonLeft = this.$el.querySelector('.Carousel-button--left')
      const _heroCarouselButtonRight = this.$el.querySelector('.Carousel-button--right')

      _heroCarouselButtonLeft.addEventListener('click', () => {
        this.range = this.modulo(this.range - 1, this.data.projects.length);
      })

      _heroCarouselButtonRight.addEventListener('click', () => {
        this.range = this.modulo(this.range + 1, this.data.projects.length);
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
    transition: all $easing;

    &.is-toggled {
      margin-bottom: $margin-r + $margin-s;
    }
  }

  &-logo {
    transition: transform $easing;
    will-change: transform;

    &.is-toggled {
      transform: translateY(-#{$margin-s});
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
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: $black;
      opacity: 0;
      transition: opacity $easing;
      will-change: opacity
    }

    &.is-toggled {
      z-index: 1000;

      &::before {
        opacity: 1;
      }
    }
  }

  &-subnav {
    position: relative;
    display: flex;
    justify-content: flex-end;
    @include grid-scale(12);
    height: 0;
    margin-top: $margin-s;
  }

  &-burger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: $burger-width;
    height: $burger-height;
    margin-top: - $burger-height / 2;
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
    transition: transform $easing;
    will-change: transform;

    &:first-child,
    &:last-child {
      transform: scaleX(.75);
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
