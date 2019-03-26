<template lang="pug">
img.Banner.Content-banner.Parallax(v-lazy="require(`~/assets/images/${src}.png`)" :alt="alt")
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
  height: 100%;
  width: auto;

  &--pocketcare {
    transform: scale(2);
  }

  &--buddybuddy {
    transform-origin: 50% 0;
    transform: scale(1.75);
  }
}
</style>
