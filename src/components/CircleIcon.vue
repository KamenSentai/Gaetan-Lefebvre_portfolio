<template lang="pug">
  .CircleIcon
    svg(width="160px" height="160px" viewBox="0 0 160 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      circle(cx="80" cy="80" r="74" fill="none" stroke-width="12" v-bind:stroke="color")
    span.CircleIcon-text {{ color }}
</template>

<script>
export default {
  props: [
    'color'
  ]
}
</script>

<style lang="scss" scoped>
.CircleIcon {
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
