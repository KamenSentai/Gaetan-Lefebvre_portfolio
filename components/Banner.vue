<template lang="pug">
.Banner
  img.Banner-image.Content-banner.rellax(:src="require(`../assets/images/${src}.png`)" :alt="alt")
</template>

<script>
export default {
  props: [
    'src',
    'alt'
  ]
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Banner {
  width: 100%;
  height: 100%;
  transform: translate(-50%, 50%);

  &--exception {
    transform: translate(-50%, 100%);
  }

  &-image {
    will-change: transform;

    @media (max-width: #{grid-media(8)}) {
      width: auto;
      height: 125%;
    }
  }
}
</style>
