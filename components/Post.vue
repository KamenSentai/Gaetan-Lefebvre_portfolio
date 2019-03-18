<template lang="pug">
.Post(data-aos="fade-up")
  h2.Post-title.Text--subtitle
    span.Text--grey {{ post.top }}
    span.Post-endline
      span.Text--black {{ post.center }}&nbsp;
      span(v-bind:class="`Text--${color}`") {{ post.bottom }}
  .Post-text
    p.Post-paragraph(v-for="paragraph in post.paragraphs") {{ paragraph }}
</template>

<script>
export default {
  props: [
    'color',
    'post'
  ]
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';
@import '~assets/styles/tools/mixins';

.Post {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: grid(10);

  @include grid-scale(10);

  @media (max-width: #{grid-media(8)}) {
    flex-direction: column;
  }

  &-title {
    display: flex;
    flex-direction: column;
    width: grid(3);
    font-weight: 700;

    @media (max-width: #{grid-media(8)}) {
      width: 100%;
      margin-bottom: $margin-s;
    }
  }

  &-endline {
    display: flex;
    flex-direction: column;

    @media (max-width: #{grid-media(8)}) {
      flex-direction: row;
    }
  }

  &-text {
    width: grid(7);

    @media (max-width: #{grid-media(10)}) {
      width: grid(5);
    }

    @media (max-width: #{grid-media(8)}) {
      width: 100%;
    }
  }

  &-paragraph {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.5em;
    margin-bottom: 1.5em;

    @media (max-width: #{grid-media(4)}) {
      font-size: 1.8rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
