<template lang="pug">
  .Charter
    p(v-bind:class="['Charter-font', `Charter-font--${font}`]") {{ name }}
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
@import '../styles/variables';
@import '../styles/functions';

.Charter {
  width: 100%;
  font-size: 2rem;
  line-height: 1.75em;

  &-font {
    margin-bottom: $margin-t;
  }
}
</style>
