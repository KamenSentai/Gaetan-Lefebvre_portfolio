<template lang="pug">
  footer.Footer
    .Footer-navigation
      router-link.Footer-left(:to="{ name: left }")
      router-link.Footer-right(:to="{ name: right }")
</template>

<script>
export default {
  props: [
    'left',
    'project',
    'right'
  ]
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Footer {
  $lineSize: $margin-b;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25rem;
  margin-top: $lineSize;
  background-color: $black;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    height: $lineSize;
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

  &-navigation {
    display: flex;
    justify-content: space-between;
    width: grid(10);
  }

  &-left,
  &-right {
    display: block;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 100%;
    border: .1rem solid $dark;
  }
}
</style>
