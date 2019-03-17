<template lang="pug">
.Slider(data-aos="fade-left" v-bind:class="automatic ? 'Slider--automatic' : ''")
  .Slider-button
    canvas.Slider-loading(ref="loading")
    a.Push.Push--left.Cursor-frame--reduced(v-bind:class="automatic ? 'Slider-push' : ''" @click="turnSlider" href="#" ref="push")
      .Push-arrow
      .Push-arrow
  .Slider-content(v-if="mockup" @touchstart="touchStart" @touchmove="touchMove")
    img.Slider-mockup(:src="require(`../static/images/${folder}/${mockup}.png`)" draggable="false")
    .Slider-images
      img.Slider-image.Shadow--image(v-for="image in images" :src="require(`../static/images/${folder}/${image}.png`)" ref="images")
  .Slider-button.Slider-button--hidden(v-if="mockup")
    .Push.Cursor-frame--reduced
  .Slider-images.Slider-images--pushed(v-else @touchstart="touchStart" @touchmove="touchMove")
    img.Slider-image.Shadow(v-for="image in images" :src="require(`../static/images/${folder}/${image}.png`)" ref="images")
</template>

<script>
export default {
  data() {
    return {
      path: '../static/images/',
      isClicked: false,
      elements: [],
      total: 0,
      count: 0,
      margins: 0,
      duration: 0,
      start: '',
      initialX: null,
      initialY: null
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
    touchStart(event) {
      this.initialX = event.touches[0].clientX
      this.initialY = event.touches[0].clientY
    },
    touchMove(event) {
      event.preventDefault()

      if (this.initialX === null || this.initialY === null) return

      let currentX = event.touches[0].clientX
      let currentY = event.touches[0].clientY

      let diffX = this.initialX - currentX
      let diffY = this.initialY - currentY

      if (Math.abs(diffX) > Math.abs(diffY) && diffX > 0) this.turnSlider(event)

      this.initialX = null
      this.initialY = null
    },
    turnSlider(event) {
      event.preventDefault()

      if (!this.isClicked) {
        this.isClicked = true
        this.start = new Date()
        const mod = this.count % this.total

        for (let i = 0 ; i < this.total ; i++) {
          if (this.elements[i]) {
            if (i === mod) {
              this.elements[i].style.zIndex = '0'
              this.elements[i].style.opacity = '0'

              setTimeout(() => {
                if (this.elements[i]) {
                  this.elements[i].style.transform = `
                    translateX(
                      calc(
                        ${i > mod ? - mod - 1 : this.total - mod - 1} * (100% + ${this.margins}px)
                      )
                    )
                    ${this.mockup ? 'scale(.75)' : ''}
                    `
                  setTimeout(() => {
                    if (this.elements[i]) this.elements[i].style.opacity = '1'
                    this.isClicked = false
                  }, this.duration / 2)
                }
              }, this.duration)
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
        }

        this.count++

        for (let i = 0 ; i < this.total ; i++) {
          if (i === this.count % this.total && this.elements[i]) {
            this.elements[i].style.zIndex = '0'
            break
          }
        }
      }
    }
  },
  mounted() {
    const _images = this.$refs.images
    const _imagesStyle = _images[0].currentStyle || window.getComputedStyle(_images[0])

    this.elements = _images
    this.total = this.elements.length
    this.margins =
      parseFloat(_imagesStyle.marginLeft) +
      parseFloat(_imagesStyle.marginRight) +
      parseFloat(_imagesStyle.paddingLeft) +
      parseFloat(_imagesStyle.paddingRight)
    this.duration = parseFloat(_imagesStyle.transitionDuration) * 1000


    if (this.automatic) {
      const _push = this.$refs.push
      const _slider = this.$el
      const _loadingSlider = this.$refs.loading

      const _pushStyle = _push.currentStyle || window.getComputedStyle(_push)
      const _sliderStyle = _slider.currentStyle || window.getComputedStyle(_slider)
      const _loadingStyle = _loadingSlider.currentStyle || window.getComputedStyle(_loadingSlider)

      _loadingSlider.width = _loadingSlider.offsetWidth
      _loadingSlider.height = _loadingSlider.offsetHeight
      let w = _loadingSlider.width
      let h = _loadingSlider.height

      const context = _loadingSlider.getContext('2d')
      context.lineWidth = (parseFloat(_loadingStyle.width) - parseFloat(_pushStyle.width)) / 2
      context.strokeStyle = `${_loadingStyle.color}`

      window.addEventListener('resize', () => {
        _loadingSlider.width = _loadingSlider.offsetWidth
        _loadingSlider.height = _loadingSlider.offsetHeight
        w = _loadingSlider.width
        h = _loadingSlider.height
      })

      const autoplaySlider = () => {
        const elapsed = (new Date() - this.start)
        const fraction = Math.PI * 2 * elapsed / this.interval
        const radius = (w - context.lineWidth) / 2

        if (radius >= 0) {
          context.clearRect(0, 0, w, h)
          context.beginPath()
          context.arc(w / 2, h / 2, radius, 0, fraction, false)
          context.stroke()
        }

        if (fraction >= Math.PI * 2) {
          this.start = new Date()
          _push.click()
        }

        window.requestAnimationFrame(autoplaySlider)
      }

      const listenScroll = () => {
        if (this.$el.classList.contains('aos-animate') || _sliderStyle.justifyContent === 'center') {
          this.start = new Date()
          autoplaySlider()
          window.cancelAnimationFrame(listenScroll)
        } else {
          window.requestAnimationFrame(listenScroll)
        }
      }
      listenScroll()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Slider {
  $rootSlider: &;
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

    #{$rootSlider}-content {
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

    #{$rootSlider}-image {
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

    #{$rootSlider}-image,
    #{$rootSlider}-mockup {
      @media (max-width: #{grid-media(4)}) {
        max-width: grid(3);
      }
    }
  }

  &--automatic {
    @media (max-width: #{grid-media(6)}) {
      justify-content: center;
    }

    #{$rootSlider}-button {
      @media (max-width: #{grid-media(6)}) {
        display: none;
      }
    }

    #{$rootSlider}-content {
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

    #{$rootSlider}-images {
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

    #{$rootSlider}-image {
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

    &--pushed {
      padding-left: $margin-l;
    }

    > * {
      z-index: 1;
    }
  }

  &-image {
    margin-right: $images-margin;
    transform-origin: 50% 50%;
  }

  &-mockup {
    transform: scale(.995);
  }

  &-mockup,
  &-image {
    max-width: grid(8);
    max-height: grid(6);
    transition: all $easing-duration;

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
    $overflow-size: .4rem;

    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% + #{$overflow-size});
    height: calc(100% + #{$overflow-size});
    color: $black;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  &-push {
    background-color: $grey;
    border: none;
  }
}
</style>
