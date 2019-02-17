<template lang="pug">
.Preload
  .Preload-loader
  .Preload-loaded
    transition(mode="out-in")
      router-view
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Preload {
  &-loader {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $black;
  }
}
</style>
