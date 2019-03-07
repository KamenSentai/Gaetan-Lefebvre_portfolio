<template lang="pug">
.Preload
  .Preload-loader
  .Preload-loaded
    Mouse
    transition(mode="out-in")
      router-view
</template>

<script>
import Mouse from './Mouse';

export default {
  components: {
    Mouse
  }
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
