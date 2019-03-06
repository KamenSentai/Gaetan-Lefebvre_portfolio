<template lang="pug">
  .Carousel
    .Carousel-container
      .Carousel-buttons
        svg.Carousel-button.Carousel-button--left(width="40px" height="40px" viewBox="0 0 40 40" @click="turnLeft")
          path#left-1.Carousel-shape.Carousel-shape--left(:class="index === 1 ? 'is-chosen' : ''" d="M20,38.8C9.6,38.8,1.2,30.4,1.2,20S9.6,1.2,20,1.2S38.8,9.6,38.8,20S30.4,38.8,20,38.8z")
          path#left-2.Carousel-shape.Carousel-shape--left(:class="index === 2 ? 'is-chosen' : ''" d="M38.8,33.6H1.2L20,1.1L38.8,33.6z")
          path#left-3.Carousel-shape.Carousel-shape--left(:class="index === 3 ? 'is-chosen' : ''" d="M20,1.2L38.8,20L20,38.8L1.2,20L20,1.2z")
          path#left-0.Carousel-shape.Carousel-shape--left(:class="index === 0 ? 'is-chosen' : ''" d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
          path#left.Carousel-shape.is-active
          polyline.Carousel-shape.is-active(points="25,22.5 20,17.5 15,22.5")
        svg.Carousel-button.Carousel-button--right(width="40px" height="40px" viewBox="0 0 40 40" @click="turnRight")
          path#right-3.Carousel-shape.Carousel-shape--right(:class="index === 3 ? 'is-chosen' : ''" d="M20,38.8C9.6,38.8,1.2,30.4,1.2,20S9.6,1.2,20,1.2S38.8,9.6,38.8,20S30.4,38.8,20,38.8z")
          path#right-0.Carousel-shape.Carousel-shape--right(:class="index === 0 ? 'is-chosen' : ''" d="M38.8,33.6H1.2L20,1.1L38.8,33.6z")
          path#right-1.Carousel-shape.Carousel-shape--right(:class="index === 1 ? 'is-chosen' : ''" d="M20,1.2L38.8,20L20,38.8L1.2,20L20,1.2z")
          path#right-2.Carousel-shape.Carousel-shape--right(:class="index === 2 ? 'is-chosen' : ''" d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
          path#right.Carousel-shape.is-active
          polyline.Carousel-shape.is-active(points="25,22.5 20,17.5 15,22.5")
      .Carousel-content
        router-link.Carousel-item(v-bind:class="`Carousel-item--${modulo(range, 4)}`" :to="{ name: 'pocketcare' }")
          img.Carousel-image(src="../assets/images/Menu/pocketcare.png" alt="Pocketcare")
        router-link.Carousel-item(v-bind:class="`Carousel-item--${modulo(range - 1, 4)}`" :to="{ name: 'tesla' }")
          img.Carousel-image(src="../assets/images/Menu/tesla.png" alt="Tesla")
        router-link.Carousel-item(v-bind:class="`Carousel-item--${modulo(range - 2, 4)}`" :to="{ name: 'buddy-buddy' }")
          img.Carousel-image(src="../assets/images/Menu/buddy-buddy.png" alt="Buddy Buddy")
        router-link.Carousel-item(v-bind:class="`Carousel-item--${modulo(range - 3, 4)}`" :to="{ name: 'personal' }")
          img.Carousel-image(src="../assets/images/Menu/personal.png" alt="Personal")
</template>

<script>
const kute = require("kute.js")
require("kute.js/kute-svg")

export default {
  data() {
    return {
      index: 0
    }
  },
  props: [
    'data',
    'range'
  ],
  methods: {
    modulo: (n, m) => {
      return ((n % m) + m) % m;
    },
    turnLeft: function() {
      const tweenLeft = kute.to('#left', { path: `#left-${this.modulo(this.range - 1, 4) }` })
      const tweenRight = kute.to(`#right`, { path: `#right-${this.modulo(this.range - 1, 4) }` })
      tweenLeft.start()
      tweenRight.start()
    },
    turnRight: function() {
      const tweenLeft = kute.to('#left', { path: `#left-${this.modulo(this.range + 1, 4) }` })
      const tweenRight = kute.to(`#right`, { path: `#right-${this.modulo(this.range + 1, 4) }` })
      tweenLeft.start()
      tweenRight.start()
    }
  },
  beforeMount() {
    this.index = this.range
  },
  mounted() {
    this.$el.querySelector('#left').setAttribute('d', this.$el.querySelector(`#left-${this.index}`).getAttribute('d'))
    this.$el.querySelector('#right').setAttribute('d', this.$el.querySelector(`#right-${this.index}`).getAttribute('d'))
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Carousel {
  width: 100%;
  height: 100%;

  &-container {
    position: relative;
    width: 100%;
    height: 1px;
    margin-top: $margin-b;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100vw + 100vh);
      height: .1rem;
      background-color: $dark;
      transform: translate(-50%, -50%);
    }
  }

  &-content {
    position: relative;
    width: 100%;
    perspective: 500px;
  }

  &-item {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: left $easing, opacity $easing, transform $easing;
    will-change: opacity, transform;

    &--0 {
      left: 50%;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    &--1 {
      left: 0;
      transform: translate(-50%, -50%) scale(0);
    }

    &--2 {
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
    }

    &--3 {
      left: 100%;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  &-buttons {
    position: absolute;
    top: 50%;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    transform: translateY(-50%);
  }

  &-button {
    cursor: pointer;

    &--left {
      transform: rotateZ(-90deg);
    }

    &--right {
      transform: rotateZ(90deg);
    }
  }

  &-shape {
    fill: $black;
    stroke: $white;
    stroke-width: 1;
    visibility: hidden;

    &.is-active {
      visibility: visible;
    }
  }
}
</style>
