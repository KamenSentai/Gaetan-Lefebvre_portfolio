<template lang="pug">
  footer.Footer
    .Footer-container
      router-link.Footer-navigation(:to="{ name: to }" v-bind:title="title")
        img.Footer-image(:src="getImage(to)" v-bind:alt="title")
        span.Footer-title {{ title }}
        router-link.Footer-link(:to="{ name: to }" v-bind:title="title")
          .Footer-arrow.Footer-arrow--first
          .Footer-arrow.Footer-arrow--last
</template>

<script>
export default {
  data() {
    return {
      url: `../assets/images/Menu/${this.to}.png`
    }
  },
  props: [
    'to',
    'title'
  ],
  methods: {
    getImage(image) {
      const images = require.context('../assets/images/Menu', false, /\.png$/)
      return images(`./${image}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Footer {
  $rootFooter: &;
  $line-size: $margin-b;
  $link-size: 4.4rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25rem;
  margin-top: $line-size;
  background-color: $black;
  border-bottom: .1rem solid $dark;
  user-select: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    height: $line-size;
  }

  &::before {
    left: 0;
    width: 100%;
    background-color: $white;
  }

  &::after {
    left: 50%;
    width: .1rem;
    background-color: $grey;
  }

  &-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &-navigation {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: grid(10);
    height: 100%;

    @media (max-width: #{grid-media(10)}) {
      width: grid(8);
    }

    @media (max-width: #{grid-media(8)}) {
      width: grid(6);
    }

    @media (max-width: #{grid-media(6)}) {
      width: grid(4);
    }

    @media (max-width: #{grid-media(4)}) {
      width: grid(3);
    }

    &:hover {
      > * {
        opacity: 1;
      }

      #{$rootFooter}-image {
        filter: none;
      }

      #{$rootFooter}-arrow {
        opacity: 1;
        transform: translateX(#{$link-size});
      }
    }
  }

  &-title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 7rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: .4;
    transform: translate(-50%, -50%);
    transition: opacity .5s ease-in-out;
    will-change: opacity;

    @media (max-width: #{grid-media(10)}) {
      font-size: 6.2rem;
    }

    @media (max-width: #{grid-media(8)}) {
      font-size: 5.4rem;
    }

    @media (max-width: #{grid-media(6)}) {
      font-size: 4.6rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 3.8rem;
    }
  }

  &-image {
    width: auto;
    height: auto;
    max-height: 37.5rem;
    max-width: 100%;
    filter: grayscale(100%);
    opacity: .4;
    transition: all .5s ease-in-out;
    will-change: opacity;
  }

  &-link {
    position: absolute;
    top: calc(50% - #{$link-size} / 2);
    right: 0;
    display: block;
    width: $link-size;
    height: $link-size;
    border-radius: 100%;
    border: .1rem solid $dark;
    overflow: hidden;

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }

  &-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: .4;
    transition: opacity .5s ease-in-out, transform .5s ease-in-out;
    will-change: opacity, transform;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: .1rem;
      height: 1.2rem;
      background-color: $white;
    }

    &::before {
      bottom: 0;
      left: .4rem;
      transform-origin: 50% 100%;
      transform: rotateZ(-30deg);
    }

    &::after {
      top: 0;
      left: .4rem;
      transform-origin: 50% 0%;
      transform: rotateZ(30deg);
    }

    &--last {
      margin-left: - $link-size;
    }
  }
}
</style>
