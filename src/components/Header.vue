<template lang="pug">
  header.Header(v-bind:class="`Header--${color || about.pages[about.colors[range]].color}`")
    .Header-topbar
      router-link(:to="{ name: 'home', params: { color: color || about.pages[about.colors[range]].color, shape: shape || about.pages[about.colors[range]].shape }}")
        Logo(:color="color || about.pages[about.colors[range]].color")
      ul.Header-navbar
        li.Header-item
          a(href="#" @click="toggleMenu") Projects
        li.Header-item
          router-link(:to="{ name: 'about', params: { color: color || about.pages[about.colors[range]].color, shape: shape || about.pages[about.colors[range]].shape }}") About
      .Header-burger
        .Header-stripe
        .Header-stripe
        .Header-stripe
    .Header-jumbotron
      Presentation(
        v-if="jumbotron === 'home'"
        type="home"
        :color="color"
        :shape="shape"
        :content="home"
        :range="0"
      )
      Presentation.Header-scrollable(
        v-if="jumbotron === 'about'"
        type="about"
        :content="about"
        :range="range"
      )
      Error(
        v-if="jumbotron === 'error'"
        :shape="shape"
      )
    Menu
</template>

<script>
import Logo from './Logo'
import Menu from './Menu'
import Presentation from './Presentation'
import Error from './Error'

export default {
  data() {
    return {
      range: 0
    }
  },
  props: [
    'color',
    'shape',
    'index',
    'jumbotron',
    'home',
    'about'
  ],
  components: {
    Logo,
    Menu,
    Presentation,
    Error
  },
  methods: {
    toggleMenu: (event) => {
      event.preventDefault()
      document.querySelector('.Menu').classList.add('is-active')
    }
  },
  beforeMount() {
    if (this.index && this.index >= 0) this.range = this.index

  },
  mounted() {
    const _headerScrollable = this.$el.querySelector('.Header-scrollable')

    if (_headerScrollable) {
      const _presentationShape = this.$el.querySelector('.Presentation-shape.is-active')
      const _presentationLayers = this.$el.querySelector('.Presentation-front.is-active') || this.$el.querySelector('.Presentation-back')
      const _shapeStyle = _presentationShape.currentStyle || window.getComputedStyle(_presentationShape)
      const _layersStyle = _presentationLayers.currentStyle || window.getComputedStyle(_presentationLayers)
      const _shapeDurationDelay = parseFloat(_shapeStyle.transitionDuration) + parseFloat(_shapeStyle.transitionDelay)
      const _layersDurationDelay = parseFloat(_layersStyle.transitionDuration) + parseFloat(_layersStyle.transitionDelay)
      const timeoutDelay = Math.max(_shapeDurationDelay, _layersDurationDelay) * 1000

      const scrollJumbotron = () => {
        this.range = (this.range + 1) % this.about.colors.length
        _headerScrollable.removeEventListener('wheel', scrollJumbotron)

        setTimeout(() => {
          _headerScrollable.addEventListener('wheel', scrollJumbotron)
        }, timeoutDelay)
      }

      _headerScrollable.addEventListener('wheel', scrollJumbotron)
      _headerScrollable.addEventListener('wheel', (event) => {
        event.preventDefault()
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

  &-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: grid(12);
    margin-top: $margin-s;
    margin-bottom: $margin-r;
  }

  &-navbar {
    display: flex;
    flex-direction: row;

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }

  &-item {
    font-size: 1.8rem;
    margin-right: $margin-s;
    font-weight: 700;

    &:last-child {
      margin-right: 0;
    }
  }

  &-burger {
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
