<template lang="pug">
  .Carousel
    .Carousel-container
      .Carousel-content
      .Carousel-buttons
        svg.Carousel-button.Carousel-button--left(width="40px" height="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
          path#left-1.Carousel-shape(:class="index === 1 ? 'is-active' : ''" d="M20,38.8C9.6,38.8,1.2,30.4,1.2,20S9.6,1.2,20,1.2S38.8,9.6,38.8,20S30.4,38.8,20,38.8z")
          path#left-2.Carousel-shape(:class="index === 2 ? 'is-active' : ''" d="M38.8,33.6H1.2L20,1.1L38.8,33.6z")
          path#left-3.Carousel-shape(:class="index === 3 ? 'is-active' : ''" d="M20,1.2L38.8,20L20,38.8L1.2,20L20,1.2z")
          path#left-0.Carousel-shape(:class="index === 0 ? 'is-active' : ''" d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
        svg.Carousel-button.Carousel-button--right(width="40px" height="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
          path#right-3.Carousel-shape(:class="index === 3 ? 'is-active' : ''" d="M20,38.8C9.6,38.8,1.2,30.4,1.2,20S9.6,1.2,20,1.2S38.8,9.6,38.8,20S30.4,38.8,20,38.8z")
          path#right-0.Carousel-shape(:class="index === 0 ? 'is-active' : ''" d="M38.8,33.6H1.2L20,1.1L38.8,33.6z")
          path#right-1.Carousel-shape(:class="index === 1 ? 'is-active' : ''" d="M20,1.2L38.8,20L20,38.8L1.2,20L20,1.2z")
          path#right-2.Carousel-shape(:class="index === 2 ? 'is-active' : ''" d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
</template>

<script>
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
  beforeMount() {
    this.index = this.range
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
