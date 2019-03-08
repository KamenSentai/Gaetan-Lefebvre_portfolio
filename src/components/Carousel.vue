<template lang="pug">
.Carousel
  .Carousel-container(v-bind:class="slide ? 'Carousel-container--case' : ''")
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
      router-link.Carousel-item(v-if="!slide || parseInt(slide) === 0" v-bind:class="`Carousel-item--${modulo(range, 4)}`" :to="{ name: 'pocketcare' }" draggable="false")
        img.Carousel-image(src="../assets/images/Menu/pocketcare.png" alt="Pocketcare" draggable="false")
      p.Carousel-label(v-if="!slide || parseInt(slide) === 0")
        span.Carousel-title Pocketcare
        span.Carousel-subtitle
          span.Text--bold School project
          span.Text--light &nbsp;- 2017
          span.Carousel-additional
            span.Text--bold Skills :
            span.Text--light &nbsp;Branding, Illustration, Interactive design
      router-link.Carousel-item(v-if="!slide || parseInt(slide) === 1" v-bind:class="`Carousel-item--${modulo(range - 1, 4)}`" :to="{ name: 'tesla' }")
        img.Carousel-image(src="../assets/images/Menu/tesla.png" alt="Tesla")
      p.Carousel-label(v-if="!slide || parseInt(slide) === 1")
        span.Carousel-title Tesla
        span.Carousel-subtitle
          span.Text--bold School project
          span.Text--light &nbsp;- 2018
          span.Carousel-additional
            span.Text--bold Skills :
            span.Text--light &nbsp;Branding, Illustration, Interactive design
      router-link.Carousel-item(v-if="!slide || parseInt(slide) === 2" v-bind:class="`Carousel-item--${modulo(range - 2, 4)}`" :to="{ name: 'buddy-buddy' }")
        img.Carousel-image(src="../assets/images/Menu/buddy-buddy.png" alt="Buddy Buddy")
      p.Carousel-label(v-if="!slide || parseInt(slide) === 2")
        span.Carousel-title Buddy Buddy
        span.Carousel-subtitle
          span.Text--bold Internship
          span.Text--light &nbsp;- 2018
          span.Carousel-additional
            span.Text--bold Skills :
            span.Text--light &nbsp;Branding, Illustration, Interactive design
      router-link.Carousel-item(v-if="!slide || parseInt(slide) === 3" v-bind:class="`Carousel-item--${modulo(range - 3, 4)}`" :to="{ name: 'personal' }")
        img.Carousel-image(src="../assets/images/Menu/personal.png" alt="Personal")
      p.Carousel-label(v-if="!slide || parseInt(slide) === 3")
        span.Carousel-title Personal
        span.Carousel-subtitle
          span.Text--bold Discovery
          span.Text--light &nbsp;- 2016/2018
          span.Carousel-additional
            span.Text--bold Skills :
            span.Text--light &nbsp;Animation, Illustration, Interactive design
      .Carousel-progress(v-if="!slide")
        p.Carousel-indicator Swipe
        svg.Carousel-step(:class="range === 0 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M38.8,15.8l-7.2,21.9H8.4L1.2,15.8L20,2.2L38.8,15.8z")
        svg.Carousel-step(:class="range === 1 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M37.8,37.8H2.2V2.2h35.4L37.8,37.8L37.8,37.8z")
        svg.Carousel-step(:class="range === 2 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M38.8,37.8H1.2L20,2.2L38.8,37.8z")
        svg.Carousel-step(:class="range === 3 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M20,37.8c-9.8,0-17.8-7.9-17.8-17.8S10.2,2.2,20,2.2S37.8,10.2,37.8,20S29.8,37.8,20,37.8z")
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
    'range',
    'slide'
  ],
  methods: {
    modulo: (n, m) => {
      return ((n % m) + m) % m;
    },
    turnLeft: function() {
      if (!this.slide) {
        const tweenLeft = kute.to('#left', { path: `#left-${this.modulo(this.range - 1, 4) }` })
        const tweenRight = kute.to(`#right`, { path: `#right-${this.modulo(this.range - 1, 4) }` })
        tweenLeft.start()
        tweenRight.start()
      }
    },
    turnRight: function() {
      if (!this.slide) {
        const tweenLeft = kute.to('#left', { path: `#left-${this.modulo(this.range + 1, 4) }` })
        const tweenRight = kute.to(`#right`, { path: `#right-${this.modulo(this.range + 1, 4) }` })
        tweenLeft.start()
        tweenRight.start()
      } else {
        window.scroll({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  },
  beforeMount() {
    this.index = this.range
  },
  mounted() {
    const _left = this.$el.querySelector('#left')
    const _right = this.$el.querySelector('#right')
    if (_left) _left.setAttribute('d', this.$el.querySelector(`#left-${this.index}`).getAttribute('d'))
    if (_right) _right.setAttribute('d', this.$el.querySelector(`#right-${this.index}`).getAttribute('d'))

    if (this.slide) {
      const tween = kute.to(`#right`, { path: `#right-${this.modulo(this.slide - 1, 4) }` })
      tween.start()

      const _subtitleCarousel = this.$el.querySelector('.Carousel-subtitle')
      const _additionalCarousel = this.$el.querySelector('.Carousel-additional')

      setTimeout(() => {
        const _additionalStyle = _additionalCarousel.currentStyle || window.getComputedStyle(_additionalCarousel)
        const _subtitleWidth = _subtitleCarousel.getBoundingClientRect().width

        let _additionalWidth = _additionalCarousel.getBoundingClientRect().width
        let gapWidth = _additionalCarousel.getBoundingClientRect().left - _subtitleCarousel.getBoundingClientRect().left - _subtitleWidth
        let translateWidth = - (_additionalWidth + gapWidth) / 2

        if (_additionalStyle.userSelect !== 'none') {
          _additionalCarousel.style.opacity = '1'
          _subtitleCarousel.style.transform = `translateX(${translateWidth}px)`
        } else {
          _additionalCarousel.style.opacity = '0'
          _subtitleCarousel.style.transform = `none`
        }
        window.addEventListener('resize', () => {
          if (_additionalStyle.userSelect !== 'none') {
            _additionalWidth = _additionalCarousel.getBoundingClientRect().width
            gapWidth = _additionalCarousel.getBoundingClientRect().left - _subtitleCarousel.getBoundingClientRect().left - _subtitleWidth
            translateWidth = - (_additionalWidth + gapWidth) / 2
            _additionalCarousel.style.opacity = '1'
            _subtitleCarousel.style.transform = `translateX(${translateWidth}px)`
          } else {
            _additionalCarousel.style.opacity = '0'
            _subtitleCarousel.style.transform = `none`
          }
        })
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Carousel {
  $rootCarousel: &;
  $extraSize: $margin-r;

  width: 100%;
  height: 100%;

  @media (max-width: #{grid-media(6)}) {
    user-select: none;
  }


  &-container {
    position: relative;
    width: 100%;
    margin-top: $margin-g;
    transition: margin-top $easing;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100vw + 100vh);
      height: .1rem;
      background-color: $dark;
      transform-origin: 50% 50%;
      transform: translate(-50%, -50%);
      transition: transform $easing;
      will-change: transform;

      @media (max-width: #{grid-media(6)}) {
        transform: translate(-50%, -50%) rotateZ(90deg);
      }
    }

    &--case {
      &::before {
        transform: translate(-50%, -50%) rotateZ(90deg);
      }

      #{$rootCarousel}-item {
        &--0 {
          transform-origin: 50% 25%;
          transform: translate(-50%, -50%);

          @media
            (max-width: #{grid-media(6)}),
            (max-height: #{grid-media(6.5)})
          {
            transform: translate(-50%, -50%) scale(.75);
          }

          @media (max-width: #{grid-media(4)}) {
            transform: translate(-50%, -50%) scale(.625);
          }
        }
      }

      #{$rootCarousel}-title {
        color: $white;
        bottom: 100%;
        margin-bottom: 0;
        transform: translate(-50%, calc(50% + #{- $margin-b - $margin-m}));

        @media (min-width: #{grid-media(10)}) {
          font-size: 12rem;
        }

        @media (max-width: #{grid-media(10)}) {
          font-size: 10rem;
        }

        @media (max-width: #{grid-media(8)}) {
          font-size: 8rem;
        }

        @media (max-width: #{grid-media(6)}) {
          font-size: 5rem;
        }

        @media (max-width: #{grid-media(4)}) {
          font-size: 4rem;
        }
      }

      #{$rootCarousel}-subtitle {
        #{$rootCarousel}-additional {
          user-select: auto;
        @media (max-width: #{grid-media(8)}) {
            user-select: none;
          }
        }
      }

      #{$rootCarousel}-buttons {
        transform: translate(-50%, -50%) rotateZ(90deg);

        @media (min-width: #{grid-media(6)}) {
          width: grid(6) * 1.5;
        }

        @media (min-height: #{grid-media(8.5)}) {
          width: grid(10);
        }

        @media (max-height: #{grid-media(7.5)}) {
          width: grid(6) * 1.25;
        }

        @media (max-height: #{grid-media(6.5)}) {
          width: grid(6);
        }

        @media (max-height: #{grid-media(6.5)}) {
          width: grid(4);
        }

        @media (max-height: #{grid-media(4.5)}) {
          opacity: 0;
        }

        > * {
          &:first-child {
            opacity: 0;
          }
        }
      }
    }

    @media (max-height: #{grid-media(9)}) {
      margin-top: $margin-b;
    }

    @media
      (max-height: #{grid-media(8)}) and (min-width: #{grid-media(6)}),
      (max-height: #{grid-media(6)}) and (max-width: #{grid-media(6)})
    {
      margin-top: $margin-l;
    }

    @media (max-height: #{grid-media(7)}) and (max-width: #{grid-media(6)}) {
      margin-top: $margin-l + $margin-t;
    }

    @media (max-height: #{grid-media(4.5)}) {
      margin-top: $margin-m;
    }
  }

  &-content {
    position: relative;
    width: 100%;
  }

  &-item {
    position: absolute;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    transition: all $easing;
    will-change: opacity, transform;

    &--0 {
      left: 50%;
      opacity: 1;
      transform: translate(-50%, -50%) scale(.75);

      @media
        (max-width: #{grid-media(6)}) and (max-height: #{grid-media(6.5)}),
        (max-width: #{grid-media(4)})
      {
        transform: translate(-50%, -50%) scale(.5);
      }

      @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(6.5)}) {
        transform: translate(-50%, -50%) scale(.375);
      }

      + #{$rootCarousel}-label {
        opacity: 1;
      }
    }

    &--1 {
      left: 0;

      @media (max-width: #{grid-media(6)}) {
        transform: translate(-50%, calc(-50% - #{(grid(4)+ $extraSize) / 2})) scale(0);
      }

      @media (max-width: #{grid-media(4)}) {
        transform: translate(-50%, calc(-50% - #{(grid(3)+ $extraSize) / 2})) scale(0);
      }
    }

    &--2 {
      left: 50%;
    }

    &--3 {
      left: 100%;

      @media (max-width: #{grid-media(6)}) {
        transform: translate(-50%, calc(-50% + #{(grid(4)+ $extraSize) / 2})) scale(0);
      }

      @media (max-width: #{grid-media(4)}) {
        transform: translate(-50%, calc(-50% + #{(grid(3)+ $extraSize) / 2})) scale(0);
      }
    }

    @media (max-width: #{grid-media(6)}) {
      left: 50%;
    }
  }

  &-image {
    user-select: none;
    transition: transform $easing;
    will-change: transform;

    @media (max-height: #{grid-media(4)}) {
      transform: scale(.75);
    }
  }

  &-label {
    position: absolute;
    left: 50%;
    bottom: - $margin-b - $margin-l;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity $easing;
    user-select: none;

    @media (max-height: #{grid-media(8.5)}) {
      bottom: - $margin-b - $margin-m;
    }
  }

  &-title {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-bottom: $margin-t;
    color: $dark;
    font-size: 12rem;
    font-weight: 700;
    letter-spacing: .0625em;
    text-transform: uppercase;
    pointer-events: none;
    transition: all $easing;
    transform: translateX(-50%);
    will-change: transform;

    @media (max-width: #{grid-media(8)}) {
      font-size: 6rem;
    }

    @media (max-height: #{grid-media(8.5)}) {
      font-size: 8rem;
    }

    @media (max-height: #{grid-media(7.5)}), (max-width: #{grid-media(6)}) {
      color: $white;
      bottom: 100%;
      margin-bottom: 0;
      transform: translate(-50%, calc(50% + #{- $margin-b - $margin-m}));
    }

    @media (max-width: #{grid-media(8)}) {
      font-size: 5rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 4rem;
    }
  }

  &-subtitle {
    position: relative;
    font-size: 2rem;
    transition: all $easing;
    will-change: transform;

    @media (max-height: #{grid-media(7.5)}) {
      height: 0;
      margin-top: - $margin-r;
    }

    @media (max-height: #{grid-media(6.5)}) {
      margin-top: - $margin-m - $margin-t;
    }

    @media (max-height: #{grid-media(5)}) {
      display: none;
    }
  }

  &-additional {
    position: absolute;
    left: calc(100% + #{$margin-t});
    opacity: 0;
    transition: opacity $easing;
    will-change: opacity;
  }

  &-buttons {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    transform-origin: 50% 50%;
    transform: translate(-50%, -50%);
    transition: all $easing;
    user-select: none;
    will-change: transform;

    @media (max-width: #{grid-media(6)}) {
      width: calc(100% + #{$extraSize});
      transform: translate(-50%, -50%) rotateZ(90deg);
    }

    @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(6.5)}) {
      width: 100%;
    }

    @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(5.5)}) and (min-width: #{grid-media(4)}) {
      width: calc(100% - #{$extraSize / 2});
    }
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

  &-progress {
    position: absolute;
    left: 50%;
    bottom: - $margin-b - $margin-l - $margin-s;
    transform: translate(-50%, 100%);

    @media (max-height: #{grid-media(8.5)}) {
      bottom: - $margin-b - $margin-m - $margin-s;
    }

    @media (max-height: #{grid-media(8)}) {
      bottom: - $margin-b - $margin-m - $margin-s + $margin-n;
    }

    @media (max-height: #{grid-media(7.5)}) {
      bottom: - $margin-b - $margin-m + $margin-t;
    }

    @media (max-height: #{grid-media(6.5)}) {
      bottom: - $margin-b - $margin-m + $margin-r;
    }

    @media (max-height: #{grid-media(6)}) {
      display: none;
    }
  }

  &-indicator {
    position: relative;
    display: none;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: .5em;
    text-transform: uppercase;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      width: 100%;
      height: 300%;
      background-color: $black;
      transform: translate(-50%, -50%);
    }

    @media (max-width: #{grid-media(6)}) {
      display: block;
    }
  }

  &-step {
    width: .8rem;
    height: .8rem;
    margin: 0 $margin-n;
    fill: rgba($white, 0);
    stroke-width: 1;
    stroke: $white;
    transition: all $easing;
    will-change: transform;

    &.is-active {
      fill: $white;
      transform: scale(1.5);
    }

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }
}
</style>
