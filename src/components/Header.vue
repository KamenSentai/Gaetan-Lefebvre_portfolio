<template lang="pug">
  header.Header
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
</template>

<script>
import Logo from './Logo'

export default {
  props: [
    'color'
  ],
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Header {
  $rootHeader: &;
  $burger-width: 4rem;
  $burger-height: 3rem;

  display: flex;
  flex-direction: column;
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

    @media (min-width: $mq-l) {
      width: grid(12) * 1.25;
    }

    @media (max-width: grid-media(12)) {
      width: grid(10);
    }

    @media (max-width: grid-media(10)) {
      width: grid(8);
    }

    @media (max-width: grid-media(8)) {
      width: grid(6);
    }

    @media (max-width: grid-media(6)) {
      width: grid(4);
    }

    @media (max-width: grid-media(4)) {
      width: grid(3);
    }
  }

  &-navbar {
    display: flex;
    flex-direction: row;

    @media (max-width: grid-media(6)) {
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

    @media (max-width: grid-media(6)) {
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
}
</style>
