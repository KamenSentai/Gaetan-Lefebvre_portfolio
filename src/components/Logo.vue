<template lang="pug">
svg.Header-logo.Logo(v-bind:class="`Logo--${color}`" width="42px" height="35px" viewBox="0 0 42 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
  polygon.Logo-lastname(fill="#FFFFFF" points="25 23 25 6 31.1592308 6 31.1592308 17.2112623 42 17.2112623 42 22.9935752")
  path.Logo-firstname(fill="#FFFFFF" d="M14.9545765,16.8149666 L14.9545765,22.4987763 L25.1076128,22.4987763 C24.7450044,24.8670303 22.4333756,29.0351575 16.4956623,29.0351575 C11.1018618,29.0351575 6.34564772,25.1038557 6.34564772,17.5286004 C6.34564772,9.57126683 11.6004484,6.11361592 16.4503363,6.11361592 C18.0228777,6.08190022 19.5789712,6.45264999 20.9829418,7.19353976 L20.9829418,0.562428421 C19.5002263,0.179367377 17.9776644,-0.00943787598 16.4503363,0.000362792886 C7.7477337,0.000362792886 0,6.67883922 0,17.5254428 C0,28.3720463 7.38814699,35 16.0424018,35 C20.877181,35 24.0651136,32.7264761 25.5155473,30.4529522 L25.9234818,34.2895238 L31,34.2895238 L31,16.8149666 L14.9545765,16.8149666 Z")
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
  @each $key, $value in $colors {
    &--#{$key} &-lastname {
      fill: $value;
    }

    &-lastname {
      transition: fill $easing .5s;
    }
  }
}
</style>
