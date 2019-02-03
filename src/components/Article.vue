<template lang="pug">
  .Article
    h2.Article-title.Text--subtitle
      span.Text--grey {{ top }}
      span.Text
        span.Text--black {{ center }}&nbsp;
        span(v-bind:class="`Text--${color}`") {{ bottom }}
    .Article-text
      p.Article-paragraph(v-for="paragraph in paragraphs") {{ paragraph }}
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
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: grid(10);

  @media (min-width: $mq-l) {
    width: grid(10) * 1.25;
  }

  @media (max-width: #{grid-media(10)}) {
    width: grid(8);
  }

  @media (max-width: #{grid-media(8)}) {
    width: grid(6);
  }

  @media (max-width: #{grid-media(6)}) {
    width: grid(4);
  }

  @media (max-width: #{grid-media(4)}) {
    width: grid(3);
  }

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
