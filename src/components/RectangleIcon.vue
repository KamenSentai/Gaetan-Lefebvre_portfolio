<template lang="pug">
  .RectangleIcon
    svg(width="160px" height="160px" viewBox="0 0 160 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      rect(x="6" y="6" width="148" height="148" fill="none" stroke-width="12" v-bind:stroke="color")
    span.RectangleIcon-text {{ color }}
</template>

<script>
export default {
  props: [
    'color'
  ]
}
</script>

<style lang="scss" scoped>
.RectangleIcon {
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
