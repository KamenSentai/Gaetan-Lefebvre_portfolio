<template lang="pug">
  .TriangleIcon
    svg(width="200px" height="160px" viewBox="0 0 200 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      polygon(transform="translate(114.000000, 80.000000) scale(-1, 1) translate(-114.000000, -80.000000) " points="44 80 184 150 184 10" fill="none" stroke-width="12" v-bind:stroke="color")
    span.TriangleIcon-text {{ color }}
</template>

<script>
export default {
  props: [
    'color'
  ]
}
</script>

<style lang="scss" scoped>
.TriangleIcon {
  position: relative;

  &-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
}
</style>
