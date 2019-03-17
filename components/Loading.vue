<template lang="pug">
.Loading
  .Loading-background
  .Loading-progressbar
    .Loading-fillbar(v-bind:class="getColor()" :style="`transform: scaleX(${getPercentage()})`")
</template>

<script>
export default {
  props: [
    'percentage'
  ],
  methods: {
    getColor() {
      const className = 'Loading-fillbar'
      return this.percentage == 100 ?
        `${className}--yellow` :
        this.percentage >= 75 ?
          `${className}--red` :
          this.percentage >= 50?
            `${className}--blue` :
            `${className}--green`
    },
    getPercentage() {
      return (this.percentage === 100 ?
        100 :
        this.percentage >= 75 ?
          75 :
          this.percentage >= 50 ?
            50 :
            this.percentage >= 25 ?
              25 :
              0) / 100
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Loading {
  $rootLoading : &;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 7500;
  transition: opacity $easing 1s;
  transition-delay: 1s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: $black;
    transition: transform $easing 2s;
  }

  &::before {
    top: 0;
    border-bottom: solid .1rem $dark;
  }

  &::after {
    bottom: 0;
    border-top: solid .1rem $dark;
  }

  &.is-hidden {
    opacity: 0;

    &::before {
      transform: translateY(-100%);
    }

    &::after {
      transform: translateY(100%);
    }

    #{$rootLoading}-background {
      opacity: 0;
    }

    #{$rootLoading}-progressbar {
      transform: translateY(-50vh);
    }
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    transition: opacity $easing 2s;
  }

  &-progressbar {
    position: absolute;
    top: calc(50% - .1rem);
    left: 0;
    z-index: 1;
    width: 100%;
    height: .2rem;
    background-color: $dark;
    transition: transform $easing 2s;
  }

  &-fillbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    transition: transform .5s linear, background-color $easing .25s;

    @each $key, $value in $colors {
      &--#{$key} {
        background-color: $value;
      }
    }
  }
}
</style>
