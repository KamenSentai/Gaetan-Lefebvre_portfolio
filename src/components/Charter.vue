<template lang="pug">
  .Charter(v-bind:class="`Charter--${font}`")
    p.Charter-name {{ name }}
    p.Charter-uppercase ABCDEFGHIJKLMNOPQRSTUVWXYZ
    p.Charter-lowercase abcdefghijklmnopqrstuvwxyz
    p.Charter-number 0123456789
</template>

<script>
export default {
  props: [
    'name',
    'font'
  ]
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Charter {
  width: 100%;
  font-size: 2rem;
  line-height: 1.75em;

  @media (max-width: #{grid-media(4)}) {
    font-size: 1.6rem;
  }

  @each $charter in $charters {
    &--#{$charter} {
      font-family: $charter;
    }
  }

  &-name {
    margin-bottom: $margin-t;
  }
}
</style>
