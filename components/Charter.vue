<template lang="pug">
.Charter(:data-font="font")
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
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Charter {
  width: 100%;
  font-size: 2rem;
  line-height: 1.75em;

  @media (max-width: #{grid-media(4)}) {
    font-size: 1.6rem;
  }

  @each $charter in $charters {
    &[data-font="#{$charter}"] {
      font-family: $charter;
    }
  }

  &-name {
    margin-bottom: $margin-t;
  }

  &-uppercase {
    text-transform: uppercase;
  }

  &-lowercase {
    text-transform: lowercase;
  }
}
</style>
