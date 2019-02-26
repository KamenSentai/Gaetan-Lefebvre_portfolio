<template lang="pug">
  .Carousel
    .Carousel-container
      .Carousel-content
      .Carousel-buttons
        svg.Carousel-button.Carousel-button--left(width="40px" height="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
          g.Carousel-shape
            circle#circle(v-if="range === 1" cx="20" cy="20" r="18.8")
            polygon#triangle(v-if="range === 2" points="20,1.1 1.2,33.6 38.8,33.6")
            rect#square(v-if="range === 3" x="6.7" y="6.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.2843 20)" width="26.5" height="26.5")
            polygon#pentagone(v-if="range === 0" points="20,1.2 1.2,14.8 8.4,36.9 31.6,36.9 38.8,14.8")
        svg.Carousel-button.Carousel-button--right(width="40px" height="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
          g.Carousel-shape
            circle#circle(v-if="range === 3" cx="20" cy="20" r="18.8")
            polygon#triangle(v-if="range === 0" points="20,1.1 1.2,33.6 38.8,33.6")
            rect#square(v-if="range === 1" x="6.7" y="6.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.2843 20)" width="26.5" height="26.5")
            polygon#pentagone(v-if="range === 2" points="20,1.2 1.2,14.8 8.4,36.9 31.6,36.9 38.8,14.8")
</template>

<script>
export default {
  props: [
    'data',
    'range'
  ],
  methods: {
    modulo(n, m) {
      return ((n % m) + m) % m;
    },
    downRange() {
      console.log('down');
      this.range = this.modulo(this.range - 1, this.data.projects.length);
    },
    upRange() {
      console.log('up');
      this.range = this.modulo(this.range + 1, this.data.projects.length);
    }
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
  }
}
</style>
