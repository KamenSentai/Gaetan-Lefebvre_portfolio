<template lang="pug">
.Loading
  .Loading-progressbar
    .Loading-fillbar(v-bind:class="getColor()" :style="`transform: scale(${percentage / 100})`")
</template>

<script>
export default {
  props: [
    'percentage'
  ],
  methods: {
    getColor() {
      const className = 'Loading-fillbar'
      return this.percentage < 25 ?
        `${className}--green` :
        this.percentage < 50 ?
          `${className}--blue` :
          this.percentage < 75 ?
            `${className}--red` :
            `${className}--yellow`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 7500;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    background: linear-gradient(
      to top,
      hsla(0, 0%, 8%, 0) 0%,
      hsla(0, 0%, 8%, 0.013) 4.05%,
      hsla(0, 0%, 8%, 0.049) 7.75%,
      hsla(0, 0%, 8%, 0.104) 11.25%,
      hsla(0, 0%, 8%, 0.175) 14.5%,
      hsla(0, 0%, 8%, 0.259) 17.65%,
      hsla(0, 0%, 8%, 0.352) 20.6%,
      hsla(0, 0%, 8%, 0.45) 23.55%,
      hsla(0, 0%, 8%, 0.55) 26.45%,
      hsla(0, 0%, 8%, 0.648) 29.4%,
      hsla(0, 0%, 8%, 0.741) 32.35%,
      hsla(0, 0%, 8%, 0.825) 35.5%,
      hsla(0, 0%, 8%, 0.896) 38.75%,
      hsla(0, 0%, 8%, 0.951) 42.25%,
      hsla(0, 0%, 8%, 0.987) 45.95%,
      hsla(0, 0%, 8%, 1) 50%,
      hsla(0, 0%, 8%, 1) 100%
    );
  }

  &::after {
    background: linear-gradient(
      to bottom,
      hsla(0, 0%, 8%, 0) 0%,
      hsla(0, 0%, 8%, 0.013) 4.05%,
      hsla(0, 0%, 8%, 0.049) 7.75%,
      hsla(0, 0%, 8%, 0.104) 11.25%,
      hsla(0, 0%, 8%, 0.175) 14.5%,
      hsla(0, 0%, 8%, 0.259) 17.65%,
      hsla(0, 0%, 8%, 0.352) 20.6%,
      hsla(0, 0%, 8%, 0.45) 23.55%,
      hsla(0, 0%, 8%, 0.55) 26.45%,
      hsla(0, 0%, 8%, 0.648) 29.4%,
      hsla(0, 0%, 8%, 0.741) 32.35%,
      hsla(0, 0%, 8%, 0.825) 35.5%,
      hsla(0, 0%, 8%, 0.896) 38.75%,
      hsla(0, 0%, 8%, 0.951) 42.25%,
      hsla(0, 0%, 8%, 0.987) 45.95%,
      hsla(0, 0%, 8%, 1) 50%,
      hsla(0, 0%, 8%, 1) 100%
    );
  }

  &-progressbar {
    position: absolute;
    top: calc(50% - .1rem);
    left: 0;
    z-index: 1;
    width: 100%;
    height: .2rem;
    background-color: $dark;
  }

  &-fillbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    transition: transform .25s linear, background-color $easing-duration;

    @each $key, $value in $colors {
      &--#{$key} {
        background-color: $value;
      }
    }
  }
}
</style>
