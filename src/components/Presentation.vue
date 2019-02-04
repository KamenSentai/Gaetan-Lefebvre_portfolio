<template lang="pug">
  .Presentation
    .Presentation-photo
    aside.Presentation-data
</template>

<script>
export default {
  props: [
    'color'
  ]
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Presentation {
  display: flex;
  justify-content: space-between;
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
  padding-top: $margin-t;

  &-photo {
    width: grid(7);
  }

  &-data {
    width: grid(5);
  }
}
</style>
