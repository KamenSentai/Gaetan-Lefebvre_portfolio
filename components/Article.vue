<template lang="pug">
.Article(data-aos="fade-up")
  h2.Article-title.Text--subtitle
    span.Text--grey {{ post.top }}
    span.Text
      span.Text--black {{ post.center }}&nbsp;
      span(v-bind:class="`Text--${color}`") {{ post.bottom }}
  .Article-text.Text-group(v-bind:class="`Text-group--${color}`")
    p.Article-paragraph(v-for="paragraph in post.paragraphs" v-html="paragraph")
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

.Article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: grid(10);

  @include grid-scale(10);

  &-title {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: $margin-s;
    font-weight: 700;
  }

  &-text {
    width: 100%;
  }

  &-paragraph {
    font-size: 2rem;
    line-height: 1.5em;
    margin-bottom: 1.5em;
    font-weight: 300;

    @media (max-width: #{grid-media(4)}) {
      font-size: 1.8rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
