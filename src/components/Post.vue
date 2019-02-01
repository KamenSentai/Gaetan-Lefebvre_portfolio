<template lang="pug">
  .Post
    h2.Post-title.Text--subtitle
      span.Text--grey {{ top }}
      span.Text--black {{ center }}
      span(v-bind:class="`Text--${color}`") {{ bottom }}
    .Post-text
      p.Post-paragraph(v-for="paragraph in paragraphs") {{ paragraph }}
</template>

<script>
export default {
  props: [
    'color',
    'top',
    'center',
    'bottom',
    'paragraphs'
  ]
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/functions';

.Post {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: grid(10);

  &-title {
    display: flex;
    flex-direction: column;
    width: grid(3);
    font-weight: 700;
  }

  &-text {
    width: grid(7);
  }

  &-paragraph {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.5em;
    margin-bottom: 1.5em;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
