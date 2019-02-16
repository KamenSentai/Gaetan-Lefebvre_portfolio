<template lang="pug">
  .Carousel(v-bind:class="automatic ? 'Carousel--automatic' : ''")
    .Carousel-button
      canvas.Carousel-loading(:data-color="color")
      a.Push.Push--left(@click="turnCarousel" href="#")
        .Push-arrow
        .Push-arrow
    .Carousel-content(v-if="mockup")
      img.Carousel-mockup(draggable="false" :src="getImage(mockup)")
      .Carousel-images
        img.Carousel-image.Shadow(v-for="image in images" :src="getImage(image)")
    .Carousel-button.Carousel-button--hidden(v-if="mockup")
      .Push
    .Carousel-images(v-else)
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
      duration: 0,
      start: ''
    }
  },
  props: [
    'folder',
    'images',
    'mockup',
    'automatic',
    'interval',
    'color'
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
        this.start = new Date()
        const mod = this.count % this.total

        for (let i = 0 ; i < this.total ; i++) {
          if (i === mod) {
            this.elements[i].style.zIndex = '0'
            this.elements[i].style.opacity = '0'

            setTimeout(() => {
              this.elements[i].style.transform = `
                translateX(
                  calc(
                    ${i > mod ? - mod - 1 : this.total - mod - 1} * (100% + ${this.margins}px)
                  )
                )
                ${this.mockup ? 'scale(.75)' : ''}
                `
              setTimeout(() => {
                this.elements[i].style.opacity = '1'
                this.isClicked = false
              }, this.duration / 2)
            }, this.duration / 2)
          } else {
            this.elements[i].style.zIndex = '10'
            this.elements[i].style.transform = `
              translateX(
                calc(
                  ${i > mod ? - mod - 1 : this.total - mod - 1} * (100% + ${this.margins}px)
                )
              )
              ${this.mockup && i !== (this.count + 1) % this.total ? 'scale(.75)' : ''}
            `
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
    const _imagesStyle = _images[0].currentStyle || window.getComputedStyle(_images[0])

    this.elements = _images
    this.total = this.elements.length
    this.margins = parseFloat(_imagesStyle.marginLeft) + parseFloat(_imagesStyle.marginRight) + parseFloat(_imagesStyle.paddingLeft) + parseFloat(_imagesStyle.paddingRight)
    this.duration = parseFloat(_imagesStyle.transitionDuration) * 1000

    if (this.automatic) {
      const _push = this.$el.querySelector('.Push')
      const _carouselLoading = this.$el.querySelector('.Carousel-loading')

      const _pushStyle = _push.currentStyle || window.getComputedStyle(_push)
      const _loadingStyle = _carouselLoading.currentStyle || window.getComputedStyle(_carouselLoading)

      _carouselLoading.width = _carouselLoading.offsetWidth
      _carouselLoading.height = _carouselLoading.offsetHeight
      const w = _carouselLoading.width
      const h = _carouselLoading.height

      const context = _carouselLoading.getContext('2d')
      context.lineWidth = (parseFloat(_loadingStyle.width) - parseFloat(_pushStyle.width)) / 2
      context.strokeStyle = `${_loadingStyle.color}`

      this.start = new Date()

      const autoplayCarousel = () => {
        const elapsed = (new Date() - this.start)
        const fraction = Math.PI * 2 * elapsed / this.interval

        context.clearRect(0, 0, w, h)
        context.beginPath()
        context.arc(w / 2, h / 2, (w - context.lineWidth) / 2, 0, fraction, false)
        context.stroke()

        if (fraction >= Math.PI * 2) {
          this.start = new Date()
          _push.click()
        }

        window.requestAnimationFrame(autoplayCarousel)
      }
      autoplayCarousel()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Carousel {
  $rootCarousel: &;
  $images-margin: $margin-s;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &--item {
    position: relative;
    justify-content: flex-start;
    margin-left: $gutter * 2 + grid(1);

    @media (max-width: #{grid-media(8)}) {
      order: 2;
      margin: 0;
      margin-top: $margin-s;
      width: 100%;
    }

    #{$rootCarousel}-content {
      margin-left: $margin-s;

      &::before {
        content: '';
        position: absolute;
        top: calc(50% - .1rem);
        left: - $margin-s;
        z-index: -1;
        width: 100vw;
        height: .1rem;
        background-color: $grey;
      }
    }

    #{$rootCarousel}-image {
      margin-right: $margin-t;
      transform-origin: 100% 50%;
    }
  }

  &--full {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: calc(50% - .1rem);
      left: -100%;
      width: 200vw;
      height: .1rem;
      background-color: $grey;
    }

    #{$rootCarousel}-image,
    #{$rootCarousel}-mockup {
      @media (max-width: #{grid-media(4)}) {
        max-width: grid(3);
      }
    }
  }

  &--automatic {
    @media (max-width: #{grid-media(6)}) {
      justify-content: center;
    }

    #{$rootCarousel}-button {
      @media (max-width: #{grid-media(6)}) {
        display: none;
      }
    }

    #{$rootCarousel}-content {
      @media (max-width: #{grid-media(6)}) {
        margin-right: auto;
        margin-left: auto;
      }
    }
  }

  &-button {
    position: relative;
    z-index: 1;

    &--hidden {
      visibility: hidden;
    }
  }

  &-content {
    position: relative;
    z-index: 1;

    #{$rootCarousel}-images {
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 0;
      padding-left: 0;
      transform: translateY(-50%);

      &::before {
        display: none;
      }
    }

    #{$rootCarousel}-image {
      transform: scale(.75);

      &:first-child {
        transform: none;
      }
    }
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
    margin-right: $images-margin;
    transform-origin: 50% 50%;
  }

  &-mockup,
  &-image {
    max-width: grid(8);
    max-height: grid(6);
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

  &-loading {
    $overflow-size: .8rem;

    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% + #{$overflow-size});
    height: calc(100% + #{$overflow-size});
    transform: translate(-50%, -50%);

    @each $key, $value in $colors {
      &[data-color=#{$key}] {
        color: $value;
      }
    }
  }
}
</style>
