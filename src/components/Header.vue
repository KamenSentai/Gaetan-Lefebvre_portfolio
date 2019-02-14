<template lang="pug">
  header.Header(v-bind:class="`Header--${color || about[about.colors[indexColor]].color}`")
    .Header-topbar
      router-link(:to="{ name: 'home', params: { color: color || about[about.colors[indexColor]].color, shape: shape || about[about.colors[indexColor]].shape }}")
        Logo(:color="color || about[about.colors[indexColor]].color")
      ul.Header-navbar
        li.Header-item
          a(href="#" @click="toggleMenu") Projects
        li.Header-item
          router-link(:to="{ name: 'about', params: { color: color || about[about.colors[indexColor]].color, shape: shape || about[about.colors[indexColor]].shape }}") About
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
        :above="home.above"
        :first="home.first"
        :last="home.last"
        :texts="home.paragraphs"
      )
      Presentation(
        v-if="jumbotron === 'about'"
        type="about"
        :color="about[about.colors[indexColor]].color"
        :shape="about[about.colors[indexColor]].shape"
        :above="about[about.colors[indexColor]].above"
        :first="about[about.colors[indexColor]].first"
        :last="about[about.colors[indexColor]].last"
        :texts="about[about.colors[indexColor]].paragraphs"
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
      indexColor: 0
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
    if (this.index && this.index >= 0) this.indexColor = this.index
  },
  mounted() {
    if (this.about) {
      let isScrolling = false

      this.$el.querySelector('.Header-jumbotron').addEventListener('wheel', (event) => {
        event.preventDefault()

        if (!isScrolling) {
          isScrolling = true
          this.indexColor = (this.indexColor + 1) % this.about.colors.length

          setTimeout(() => {
            isScrolling = false
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
