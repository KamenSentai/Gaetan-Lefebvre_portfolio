<template lang="pug">
img.Banner.Content-banner(:src="require(`../assets/images/${src}.png`)" :alt="alt")
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
  width: auto;

  &--pocketcare {
    height: 200%;
  }

  &--buddybuddy {
    height: 175%;
  }
}
</style>
