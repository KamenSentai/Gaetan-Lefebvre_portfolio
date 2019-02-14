<template lang="pug">
  .Carousel
    .Carousel-button
      a.Push.Push--left(@click="")
        .Push-arrow
        .Push-arrow
    .Carousel-images
      img.Carousel-image.Shadow(v-for="image in images" :src="getImage(image)")
</template>

<script>
export default {
  data() {
    return {
      path: '../assets/images/'
    }
  },
  props: [
    'folder',
    'images'
  ],
  methods: {
    getImage(image) {
      let images
      switch (this.folder) {
        case 'Pocketcare':
          images = require.context('../assets/images/Pocketcare', false, /\.png$/)
          break
        case 'Tesla':
          images = require.context('../assets/images/Tesla', false, /\.png$/)
          break
        case 'BuddyBuddy':
          images = require.context('../assets/images/BuddyBuddy', false, /\.png$/)
          break
        case 'Personal':
          images = require.context('../assets/images/Personal', false, /\.png$/)
          break
      }
      return images(`./${image}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Carousel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &-button {
    z-index: 1;
  }

  &-images {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    padding-left: $margin-s;

    &::before {
      content: '';
      position: absolute;
      top: calc(50% - .1rem);
      left: 0;
      width: 100%;
      height: .1rem;
      background-color: $grey;
    }

    > * {
      z-index: 1;
    }
  }

  &-image {
    max-width: grid(8);
    margin-right: $margin-s;

    @media (max-width: #{grid-media(10)}) {
      max-width: grid(6);
    }

    @media (max-width: #{grid-media(8)}) {
      max-width: grid(4);
    }

    @media (max-width: #{grid-media(6)}) {
      max-width: grid(3);
    }

    @media (max-width: #{grid-media(4)}) {
      max-width: grid(2);
    }
  }
}
</style>
