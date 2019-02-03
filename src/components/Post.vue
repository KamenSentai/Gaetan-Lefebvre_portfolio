<template lang="pug">
  .Post
    h2.Post-title.Text--subtitle
      span.Text--grey {{ top }}
      span.Post-endline
        span.Text--black {{ center }}&nbsp;
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
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Post {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: grid(10);

  @media (max-width: #{grid-media(10)}) {
    width: grid(8);
  }

  @media (max-width: #{grid-media(8)}) {
    flex-direction: column;
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
