<template lang="pug">
  .App
    transition(mode="out-in")
      router-view
</template>

<script>
export default {
  metaInfo: {
    title: 'Gaëtan Lefebvre',
  }
}
</script>

<style lang="scss">
@import './styles/app';
</style>
