<template lang="pug">
  .Carousel
    .Carousel-button
      a.Push.Push--left(@click="turnCarousel" href="#")
        .Push-arrow
        .Push-arrow
    .Carousel-images
      img.Carousel-image.Shadow(v-for="image in images" :src="getImage(image)")
</template>

<script>
export default {
  data() {
    return {
      path: '../assets/images/',
      carouselImages: [],
      isClicked: false
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
    },
    turnCarousel(event) {
      event.preventDefault()

      if (!this.isClicked) {
        this.isClicked = true

        const firstImage = this.carouselImages[0]
        firstImage.classList.add('is-fading')

        for (let i = 1 ; i < this.carouselImages.length ; i++) {
          this.carouselImages[i].classList.add('is-sliding')
        }

        this.carouselImages.shift()

        const whichTransitionEvent = () => {
          let t
          const el = document.createElement('fakeelement')
          const transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
          }

          for (t in transitions) if (el.style[t] !== undefined) return transitions[t]
        }

        const transitionEvent = whichTransitionEvent()
        transitionEvent && firstImage.addEventListener(transitionEvent, () => {
          firstImage.parentNode.removeChild(firstImage)

          for (const carouselImage of this.carouselImages) {
            carouselImage.classList.remove('is-sliding')
          }

          this.doubleImage()
          this.isClicked = false
        })
      }
    },
    doubleImage() {
      const _carouselImages = Array.from(this.$el.querySelectorAll('.Carousel-image'))
      const doubledImage = new Image()

      for (let key in _carouselImages[0].dataset) {
        doubledImage.dataset[`${key}`] = ''
      }

      doubledImage.src = _carouselImages[0].getAttribute('src')

      for (const classImage of _carouselImages[0].classList) {
        doubledImage.classList.add(classImage)
      }

      this.$el.querySelector('.Carousel-images').appendChild(doubledImage)

      _carouselImages.push(doubledImage)
      this.carouselImages = _carouselImages
    }
  },
  mounted() {
    this.doubleImage()
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Carousel {
  $images-margin: $margin-s;

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
    margin-right: $images-margin;
    transition: all $easing;

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

    &.is-fading {
      opacity: 0;
    }

    &.is-sliding {
      transform: translateX(calc(-100% - #{$images-margin}));
    }
  }
}
</style>
