<template lang="pug">
svg.Logo(v-bind:class="`Logo--${color}`" width="42px" height="35px" viewBox="0 0 42 35")
  g.Logo-turnable
    polygon.Logo-hidden(fill="none" points="14,22.5 25,22.5 25,33.5 31,33.5 31,16.5 14,16.5")
    polygon.Logo-lastname(fill="#FFFFFF" points="25,22.5 25,5.5 31,5.5 31,16.5 42,16.5 42,22.5")
  path.Logo-firstname(fill="#FFFFFF" d="M14,16.5v6h11.1c-0.4,2.4-2.7,6.5-8.6,6.5c-5.4,0-10.2-3.9-10.2-11.5c0-8,5.3-11.4,10.1-11.4 c1.6,0,3.1,0.3,4.5,1.1V0.6C19.5,0.2,18,0,16.5,0C7.7,0,0,6.7,0,17.5S7.4,35,16,35c4.8,0,8-2.3,9.5-4.5l0.4,3.8H31V16.5H14z")
</template>

<script>
export default {
  props: [
    'color'
  ]
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Logo {
  $rootLogo: &;

  &-turnable {
    transform-origin: 67% 56%;
    transition: transform $easing-duration;
  }

  &:hover {
    #{$rootLogo}-turnable {
      transform: rotateZ(-90deg);
    }
  }

  @each $key, $value in $colors {
    &--#{$key} &-lastname {
      fill: $value;
    }

    &-lastname {
      transition: fill $easing-duration;
    }
  }
}
</style>
