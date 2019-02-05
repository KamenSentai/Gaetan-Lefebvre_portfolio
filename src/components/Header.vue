<template lang="pug">
  header(v-bind:class="['Header', `Header--${color}`]")
    .Header-topbar
      router-link(:to="{ name: 'home'}")
        Logo(:color="color")
      ul.Header-navbar
        li.Header-item
          router-link(:to="{ name: 'projects' }") Projects
        li.Header-item
          router-link(:to="{ name: 'about' }") About
        li.Header-item
          router-link(:to="{ name: 'contact' }") Contact
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
        above="Hi, I'm"
        first="Gaëtan"
        last="Lefebvre"
        :texts="data"
      )
      Presentation(
        v-if="jumbotron === 'about'"
        type="about"
        :color="color"
        :shape="shape"
        above="Who"
        first="am I"
        last="really ?"
        :texts="data"
      )
      Error(
        v-if="jumbotron === 'error'"
        :shape="shape"
      )
</template>

<script>
import Logo from './Logo'
import Presentation from './Presentation'
import Error from './Error'

export default {
  props: [
    'color',
    'shape',
    'jumbotron',
    'data'
  ],
  components: {
    Logo,
    Presentation,
    Error
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
    transition: transform .5s ease-in-out;
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
