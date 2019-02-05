<template lang="pug">
  .Error
    .Error-code
      span 4
      img.Error-image(:src="getImage(shape)" v-bind:alt="shape")
      span 4
    .Error-message
      h1.Error-title Page not found
      p.Error-text We are sorry. We can’t find the URL you are looking for.&nbsp;
      p.Error-text Please refresh your page and try again.
</template>

<script>
export default {
  props: [
    'shape'
  ],
  methods: {
    getImage(image) {
      const images = require.context('../assets/images/Error', false, /\.png$/)
      return images(`./${image}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Error {
  $code-size: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  &-code {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40rem;
    font-weight: 300;
  }

  &-image {
    width: auto;
    height: 40rem;
  }

  &-message {
    margin-bottom: $margin-s;
  }

  &-title {
    margin-top: $margin-r;
    margin-bottom: $margin-t;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: .125em;

    @media (max-width: #{grid-media(10)}) {
      font-size: 3.7rem;
    }

    @media (max-width: #{grid-media(8)}) {
      font-size: 3.4rem;
    }

    @media (max-width: #{grid-media(6)}) {
      font-size: 3.1rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 2.8rem;
    }
  }

  &-text {
    font-size: 2.6rem;
    font-weight: 300;
    line-height: 1.5em;

    @media (max-width: #{grid-media(10)}) {
      font-size: 2.4rem;
    }

    @media (max-width: #{grid-media(8)}) {
      font-size: 2.2rem;
    }

    @media (max-width: #{grid-media(6)}) {
      display: inline;
      font-size: 2rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 1.8rem;
    }
  }
}
</style>
