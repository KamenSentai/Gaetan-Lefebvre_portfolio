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
      isClicked: false,
      elements: [],
      total: 0,
      count: 0,
      margins: 0,
      duration: 0
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
        const mod = this.count % this.total

        for (let i = 0 ; i < this.total ; i++) {
          if (i === mod) {
            this.elements[i].style.zIndex = '0'
            this.elements[i].style.opacity = '0'

            setTimeout(() => {
              this.elements[i].style.transform = `translateX(calc(${i > mod ? - mod - 1 : this.total - mod - 1} * (100% + ${this.margins}px)))`
              setTimeout(() => {
                this.elements[i].style.opacity = '1'
              }, this.duration)
              this.isClicked = false
            }, this.duration)
          } else {
            this.elements[i].style.zIndex = '10'
            this.elements[i].style.transform = `translateX(calc(${i > mod ? - mod - 1 : this.total - mod - 1} * (100% + ${this.margins}px)))`
          }
        }

        this.count++

        for (let i = 0 ; i < this.total ; i++) {
          if (i === this.count % this.total) {
            this.elements[i].style.zIndex = '0'
            break
          }
        }
      }
    }
  },
  mounted() {
    const _carouselImages = this.$el.querySelector('.Carousel-images')
    const _images = Array.from(_carouselImages.querySelectorAll('.Carousel-image'))

    for (const _carouselImage of _images) {
      const _clonedImage = new Image()

      for (let key in _carouselImage.dataset) {
        _clonedImage.dataset[`${key}`] = ''
      }

      _clonedImage.src = _carouselImage.getAttribute('src')

      for (const classImage of _carouselImage.classList) {
        _clonedImage.classList.add(classImage)
      }

      _carouselImages.appendChild(_clonedImage)
    }

    const style = _images[0].currentStyle || window.getComputedStyle(_images[0])

    this.elements = Array.from(_carouselImages.querySelectorAll('.Carousel-image'))
    this.total = this.elements.length
    this.margins = parseFloat(style.marginLeft) + parseFloat(style.marginRight) + parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
    this.duration = parseFloat(style.transitionDuration) * 1000
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
  }
}
</style>
