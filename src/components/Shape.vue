<template lang="pug">
  .Shape
    svg(v-if="shape === 'circle'" width="160px" height="160px" viewBox="0 0 160 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      circle(cx="80" cy="80" r="74" fill="none" stroke-width="12" v-bind:stroke="color")
    svg(v-if="shape === 'rectangle'" width="160px" height="160px" viewBox="0 0 160 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      rect(x="6" y="6" width="148" height="148" fill="none" stroke-width="12" v-bind:stroke="color")
    svg(v-if="shape === 'triangle'" width="200px" height="160px" viewBox="0 0 200 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      polygon(transform="translate(114.000000, 80.000000) scale(-1, 1) translate(-114.000000, -80.000000) " points="44 80 184 150 184 10" fill="none" stroke-width="12" v-bind:stroke="color")
    span.Shape-text {{ color }}
</template>

<script>
export default {
  props: [
    'shape',
    'color'
  ]
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Shape {
  position: relative;
  display: flex;
  flex-direction: column;

  svg {
    width: auto;

    @media (max-width: #{grid-media(10)}) {
      height: $margin-r;
    }

    @media (max-width: #{grid-media(6)}) {
      height: $margin-s;
    }

    @media (max-width: #{grid-media(4)}) {
      height: $margin-t;
    }
  }

  &-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    text-align: center;

    @media (max-width: #{grid-media(10)}) {
      position: static;
      margin-top: $margin-n;
      transform: none;
    }

    @media (max-width: #{grid-media(6)}) {
      font-size: 1.6rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 1.2rem;
    }
  }
}
</style>
