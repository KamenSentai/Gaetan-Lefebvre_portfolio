<template lang="pug">
.Loading
  .Loading-container
    .Loading-background
    .Loading-progressbar
      .Loading-fillbar(v-bind:class="getColor()" :style="`transform: scaleX(${getRoundedPercentage() / 100})`")
    .Loading-indicator
      span.Loading-progress {{ progress }}
      svg.Loading-pointer(ref="pointer" width="40px" height="40px" viewBox="0 0 40 40")
        path#Loading-circle.Loading-shape(d="M38.8,20c0,5.2-2.1,9.9-5.5,13.3s-8.1,5.5-13.3,5.5c-5.2,0-9.9-2.1-13.3-5.5C3.3,29.9,1.2,25.2,1.2,20 c0-5.2,2.1-9.9,5.5-13.3S14.8,1.2,20,1.2c5.2,0,9.9,2.1,13.3,5.5C36.7,10.1,38.8,14.8,38.8,20z")
        path#Loading-triangle.Loading-shape(d="M20,1.1l18.8,32.5H1.2L20,1.1z")
        path#Loading-square.Loading-shape(d="M38.8,1.2v37.5H20H1.2V1.2H38.8z")
        path#Loading-pentagone.Loading-shape(d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
        path#Loading-shape.Loading-shape.is-active(ref="shape" d="M38.8,20c0,5.2-2.1,9.9-5.5,13.3s-8.1,5.5-13.3,5.5c-5.2,0-9.9-2.1-13.3-5.5C3.3,29.9,1.2,25.2,1.2,20 c0-5.2,2.1-9.9,5.5-13.3S14.8,1.2,20,1.2c5.2,0,9.9,2.1,13.3,5.5C36.7,10.1,38.8,14.8,38.8,20z")
      span.Loading-total 100
</template>

<script>
let kute

if (process.client) {
  kute = require('kute.js')
  require('kute.js/kute-svg')
}

export default {
  data() {
    return {
      progress: 0,
      shape: 'circle'
    }
  },
  props: [
    'roundedPercentage'
  ],
  methods: {
    getColor() {
      const className = 'Loading-fillbar'
      return this.roundedPercentage == 100 ?
        `${className}--yellow` :
        this.roundedPercentage >= 75 ?
          `${className}--red` :
          this.roundedPercentage >= 50?
            `${className}--blue` :
            `${className}--green`
    },
    getRoundedPercentage() {
      return this.roundedPercentage === 100 ?
        100 :
        this.roundedPercentage >= 75 ?
          75 :
          this.roundedPercentage >= 50 ?
            50 :
            this.roundedPercentage >= 25 ?
              25 :
              0
    },
    updateRoundedPercentage() {
      if (this.progress < this.getRoundedPercentage()) this.progress++

      if (this.$refs.pointer && this.$refs.shape) {
        if (this.progress > 75) {
          if (this.shape !== 'pentagone') {
            const tween = kute.to('#Loading-shape', { path: '#Loading-pentagone' })
            tween.start()
            this.shape = 'pentagone'
            this.$refs.pointer.style.transform = `rotateZ(${3 * 360}deg)`
          }
        } else if (this.progress > 50) {
          if (this.shape !== 'square') {
            const tween = kute.to('#Loading-shape', { path: '#Loading-square' })
            tween.start()
            this.shape = 'square'
            this.$refs.pointer.style.transform = `rotateZ(${2 * 360}deg)`
          }
        } else if (this.progress > 25) {
          if (this.shape !== 'triangle') {
            const tween = kute.to('#Loading-shape', { path: '#Loading-triangle' })
            tween.start()
            this.shape = 'triangle'
            this.$refs.pointer.style.transform = `rotateZ(${1 * 360}deg)`
          }
        } else if (this.progress > 0) {
          this.$refs.shape.classList.add('is-displayed')
        }
      }

      if (this.progress < 100) window.requestAnimationFrame(this.updateRoundedPercentage)
      else {
        setTimeout(() => {
        if (this.$refs.shape) {
            this.$refs.shape.classList.remove('is-displayed')
          }
        }, 1500)
        window.cancelAnimationFrame(this.updateRoundedPercentage)
      }
    }
  },
  mounted() {
    this.updateRoundedPercentage()
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Loading {
  $rootLoading : &;
  $pointerSize: 3.2rem;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 7500;
  transition: opacity $easing .5s;
  transition-delay: .5s;

  &.is-hidden {
    opacity: 0;

    #{$rootLoading}-container {
      &::before {
        transform: translateY(-100%);
      }

      &::after {
        transform: translateY(100%);
      }
    }

    #{$rootLoading}-background {
      opacity: 0;
    }

    #{$rootLoading}-progressbar {
      transform: translateY(-50vh);

      #{$rootLoading}-fillbar {
        background-color: $dark;
      }
    }

    #{$rootLoading}-progress {
      transform: translateY(-50vh);
    }

    #{$rootLoading}-total {
      transform: translateY(50vh);
    }

    #{$rootLoading}-shape {
      fill: rgba($black, 0);
    }
  }

  &-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      background-color: $black;
      transition: transform $easing 1s;
    }

    &::before {
      top: 0;
      border-bottom: solid .1rem $dark;
    }

    &::after {
      bottom: 0;
      border-top: solid .1rem $dark;
    }
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    transition: opacity $easing 1s;
  }

  &-progressbar {
    position: absolute;
    top: calc(50% - .1rem);
    left: 0;
    z-index: 1;
    width: 100%;
    height: .2rem;
    background-color: $dark;
    transition: transform $easing 1s;
  }

  &-fillbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    transition: transform .5s linear, background-color $easing .25s;

    @each $key, $value in $colors {
      &--#{$key} {
        background-color: $value;
      }
    }
  }

  &-indicator {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    color: $white;
    font-size: 1.4rem;
    font-weight: 300;
    pointer-events: none;
  }

  &-progress,
  &-total {
    transition: transform $easing 1s;
  }

  &-pointer {
    width: $pointerSize;
    height: $pointerSize;
    margin: $margin-n 0;
    stroke: none;
    transition: transform $easing 1s;
    transform-origin: 50% 50%;
  }

  &-shape {
    transition: transform $easing .5s, fill $easing .5s .25s;
    transform-origin: 50% 50%;
    transform: scale(0);
    visibility: hidden;

    &.is-active {
      fill: $black;
      stroke: $white;
      stroke-width: 2;
      visibility: visible;
      will-change: transform;
    }

    &.is-displayed {
      transform: scale(1);
    }
  }
}
</style>
