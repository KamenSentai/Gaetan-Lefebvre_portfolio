<template lang="pug">
.Carousel
  .Carousel-container(v-bind:class="[slide ? 'Carousel-container--case' : '', isMenu ? 'is-hidden': '']" ref="container")
    .Carousel-buttons(v-bind:class="isMenu ? 'is-hidden': ''")
      svg.Carousel-button.Carousel-button--left.Cursor-frame--reduced(ref="leftButton" width="40px" height="40px" viewBox="0 0 40 40" @click="turnLeft")
        path#Carousel-left-1.Carousel-shape.Carousel-shape--left(:class="index === 1 ? 'is-chosen' : ''" d="M38.8,20c0,5.2-2.1,9.9-5.5,13.3s-8.1,5.5-13.3,5.5c-5.2,0-9.9-2.1-13.3-5.5C3.3,29.9,1.2,25.2,1.2,20 c0-5.2,2.1-9.9,5.5-13.3S14.8,1.2,20,1.2c5.2,0,9.9,2.1,13.3,5.5C36.7,10.1,38.8,14.8,38.8,20z")
        path#Carousel-left-2.Carousel-shape.Carousel-shape--left(:class="index === 2 ? 'is-chosen' : ''" d="M20,1.1l18.8,32.5H1.2L20,1.1z")
        path#Carousel-left-3.Carousel-shape.Carousel-shape--left(:class="index === 3 ? 'is-chosen' : ''" d="M20,1.2L38.8,20l-9.4,9.4L20,38.8L1.2,20L20,1.2z")
        path#Carousel-left-0.Carousel-shape.Carousel-shape--left(:class="index === 0 ? 'is-chosen' : ''" d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
        path#Carousel-left.Carousel-shape.is-active(ref="left")
        polyline.Carousel-shape.Carousel-shape--arrow.is-active(points="25,22.5 20,17.5 15,22.5")
      svg.Carousel-button.Carousel-button--right.Cursor-frame--reduced(ref="rightButton" width="40px" height="40px" viewBox="0 0 40 40" @click="turnRight")
        path#Carousel-right-3.Carousel-shape.Carousel-shape--right(:class="index === 3 ? 'is-chosen' : ''" d="M38.8,20c0,5.2-2.1,9.9-5.5,13.3s-8.1,5.5-13.3,5.5c-5.2,0-9.9-2.1-13.3-5.5C3.3,29.9,1.2,25.2,1.2,20 c0-5.2,2.1-9.9,5.5-13.3S14.8,1.2,20,1.2c5.2,0,9.9,2.1,13.3,5.5C36.7,10.1,38.8,14.8,38.8,20z")
        path#Carousel-right-0.Carousel-shape.Carousel-shape--right(:class="index === 0 ? 'is-chosen' : ''" d="M20,1.1l18.8,32.5H1.2L20,1.1z")
        path#Carousel-right-1.Carousel-shape.Carousel-shape--right(:class="index === 1 ? 'is-chosen' : ''" d="M20,1.2L38.8,20l-9.4,9.4L20,38.8L1.2,20L20,1.2z")
        path#Carousel-right-2.Carousel-shape.Carousel-shape--right(:class="index === 2 ? 'is-chosen' : ''" d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
        path#Carousel-right.Carousel-shape.is-active(ref="right")
        polyline.Carousel-shape.Carousel-shape--arrow.is-active(points="25,22.5 20,17.5 15,22.5")
    .Carousel-content(v-bind:class="isMenu ? 'is-hidden': ''")
      .Content-group
        nuxt-link.Carousel-item.Cursor-frame--text(v-if="!slide" v-bind:class="`Carousel-item--${modulo(range, 4)}`" :to="{ name: 'projects-pocketcare', params: { from: $route.name } }")
          .Carousel-image
            img.Carousel-layer.Carousel-layer--back(src="../assets/images/Projects/pocketcare_back.png" alt="Pocketcare" draggable="false")
            Glitch.Carousel-neon(
              path="assets/images/Projects/"
              image="pocketcare"
              alt="Pocketcare"
              :isAutomatic="modulo(range, 4) === 0 ? true : false"
            )
            img.Carousel-layer.Carousel-layer--front(src="../assets/images/Projects/pocketcare_front.png" alt="Pocketcare" draggable="false")
            img.Carousel-extra.is-hidden.Absolute.Absolute--p1(src="../assets/images/Projects/pocketcare_extra.png" alt="Pocketcare" draggable="false")
        .Carousel-item.Carousel-item--0(v-else-if="parseInt(slide) === 0")
          .Carousel-image
            img.Carousel-layer.Carousel-layer--back(src="../assets/images/Projects/pocketcare_back.png" alt="Pocketcare" draggable="false")
            Glitch.Carousel-neon(
              path="assets/images/Projects/"
              image="pocketcare"
              alt="Pocketcare"
              :isAutomatic="false"
            )
            img.Carousel-layer.Carousel-layer--front(src="../assets/images/Projects/pocketcare_front.png" alt="Pocketcare" draggable="false")
            img.Carousel-extra.is-hidden.Absolute.Absolute--p1(src="../assets/images/Projects/pocketcare_extra.png" alt="Pocketcare" draggable="false")
        .Carousel-label(v-if="!slide || parseInt(slide) === 0" v-bind:class="[isMenu ? 'is-hidden': '', !isLabelized ? 'is-hidden': '']")
          h1.Carousel-title(v-if="slide" v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="title")
            span.Carousel-main Pocketcare
          h2.Carousel-title(v-else)
            span.Carousel-main Pocketcare
          span.Carousel-subtitle(v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="subtitle")
            span.Text--bold School project
            span.Text--light &nbsp;- 2017
            span.Carousel-additional(v-if="slide" ref="additional")
              span.Text--bold Skills :
              span.Text--light &nbsp;Branding, Illustration, Interactive design
      .Content-group
        nuxt-link.Carousel-item.Cursor-frame--text(v-if="!slide" v-bind:class="`Carousel-item--${modulo(range - 1, 4)}`" :to="{ name: 'projects-tesla', params: { from: $route.name } }")
          .Carousel-image
            img.Carousel-layer.Carousel-layer--back(src="../assets/images/Projects/tesla_back.png" alt="Tesla")
            Glitch.Carousel-neon(
              path="assets/images/Projects/"
              image="tesla"
              alt="Tesla"
              :isAutomatic="modulo(range - 1, 4) === 0 ? true : false"
            )
            img.Carousel-layer.Carousel-layer--front(src="../assets/images/Projects/tesla_front.png" alt="Tesla")
            img.Carousel-extra.is-hidden.Absolute.Absolute--p2(src="../assets/images/Projects/tesla_extra.png" alt="Tesla")
        .Carousel-item.Carousel-item--0(v-else-if="parseInt(slide) === 1")
          .Carousel-image
            img.Carousel-layer.Carousel-layer--back(src="../assets/images/Projects/tesla_back.png" alt="Tesla")
            Glitch.Carousel-neon(
              path="assets/images/Projects/"
              image="tesla"
              alt="Tesla"
              :isAutomatic="false"
            )
            img.Carousel-layer.Carousel-layer--front(src="../assets/images/Projects/tesla_front.png" alt="Tesla")
            img.Carousel-extra.is-hidden.Absolute.Absolute--p2(src="../assets/images/Projects/tesla_extra.png" alt="Tesla")
        .Carousel-label(v-if="!slide || parseInt(slide) === 1" v-bind:class="[isMenu ? 'is-hidden': '', !isLabelized ? 'is-hidden': '']")
          h1.Carousel-title(v-if="slide" v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="title")
            span.Carousel-main Tesla
          h2.Carousel-title(v-else)
            span.Carousel-main Tesla
          span.Carousel-subtitle(v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="subtitle")
            span.Text--bold School project
            span.Text--light &nbsp;- 2018
            span.Carousel-additional(v-if="slide" ref="additional")
              span.Text--bold Skills :
              span.Text--light &nbsp;Branding, Illustration, Interactive design
      .Content-group
        nuxt-link.Carousel-item.Cursor-frame--text(v-if="!slide" v-bind:class="`Carousel-item--${modulo(range - 2, 4)}`" :to="{ name: 'projects-buddy-buddy', params: { from: $route.name } }")
          .Carousel-image
            img.Carousel-layer.Carousel-layer--back(src="../assets/images/Projects/buddy-buddy_back.png" alt="Buddy Buddy")
            Glitch.Carousel-neon(
              path="assets/images/Projects/"
              image="buddy-buddy"
              alt="Buddy Buddy"
              :isAutomatic="modulo(range - 2, 4) === 0 ? true : false"
            )
            img.Carousel-layer.Carousel-layer--front(src="../assets/images/Projects/buddy-buddy_front.png" alt="Buddy Buddy")
            img.Carousel-extra.is-hidden.Absolute.Absolute--p3(src="../assets/images/Projects/buddy-buddy_extra.png" alt="Buddy Buddy")
        .Carousel-item.Carousel-item--0(v-else-if="parseInt(slide) === 2")
          .Carousel-image
            img.Carousel-layer.Carousel-layer--back(src="../assets/images/Projects/buddy-buddy_back.png" alt="Buddy Buddy")
            Glitch.Carousel-neon(
              path="assets/images/Projects/"
              image="buddy-buddy"
              alt="Buddy Buddy"
              :isAutomatic="false"
            )
            img.Carousel-layer.Carousel-layer--front(src="../assets/images/Projects/buddy-buddy_front.png" alt="Buddy Buddy")
            img.Carousel-extra.is-hidden.Absolute.Absolute--p3(src="../assets/images/Projects/buddy-buddy_extra.png" alt="Buddy Buddy")
        .Carousel-label(v-if="!slide || parseInt(slide) === 2" v-bind:class="[isMenu ? 'is-hidden': '', !isLabelized ? 'is-hidden': '']")
          h1.Carousel-title(v-if="slide" v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="title")
            span.Carousel-main Buddy Buddy
          h2.Carousel-title(v-else)
            span.Carousel-main Buddy Buddy
          span.Carousel-subtitle(v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="subtitle")
            span.Text--bold Internship
            span.Text--light &nbsp;- 2018
            span.Carousel-additional(v-if="slide" ref="additional")
              span.Text--bold Skills :
              span.Text--light &nbsp;Branding, Illustration, Interactive design
      .Content-group
        span.Carousel-item.Carousel-item--forbidden(v-if="!slide || parseInt(slide) === 3" v-bind:class="`Carousel-item--${modulo(range - 3, 4)}`")
          .Carousel-image
            img.Carousel-layer.Carousel-layer--back(src="../assets/images/Projects/personal_back.png" alt="Personal")
            Glitch.Carousel-neon(
              path="assets/images/Projects/"
              image="personal"
              alt="Personal"
              :isAutomatic="modulo(range - 3, 4) === 0 ? true : false"
            )
            img.Carousel-layer.Carousel-layer--front(src="../assets/images/Projects/personal_front.png" alt="Personal")
            Lock.Carousel-lock(v-bind:class="!isLocked ? 'is-hidden' : ''")
        .Carousel-label(v-if="!slide || parseInt(slide) === 3" v-bind:class="[isMenu ? 'is-hidden': '', !isLabelized ? 'is-hidden': '']")
          h1.Carousel-title(v-if="slide" v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="title")
            span.Carousel-main Coming soon
          h2.Carousel-title(v-else)
            span.Carousel-main Coming soon
          span.Carousel-subtitle(v-bind:class="$route.params.from && $route.params.from.includes('projects-') ? 'is-hidden' : ''" ref="subtitle")
            span.Text--bold New
            span.Text--light &nbsp;- 2019
            span.Carousel-additional(v-if="slide" ref="additional")
              span.Text--bold Skills :
              span.Text--light &nbsp;Interactive design
      .Carousel-progress(v-if="!slide" v-bind:class="[isMenu ? 'is-hidden': '', !isProgressed ? 'is-hidden' : '']" ref="progress")
        .Carousel-indicator Swipe
        svg.Carousel-step(:class="range === 0 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M20,37.8c-9.8,0-17.8-7.9-17.8-17.8S10.2,2.2,20,2.2S37.8,10.2,37.8,20S29.8,37.8,20,37.8z")
        svg.Carousel-step(:class="range === 1 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M38.8,37.8H1.2L20,2.2L38.8,37.8z")
        svg.Carousel-step(:class="range === 2 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M37.8,37.8H2.2V2.2h35.4L37.8,37.8L37.8,37.8z")
        svg.Carousel-step(:class="range === 3 ? 'is-active' : ''" width="40px" height="40px" viewBox="0 0 40 40")
          path(d="M38.8,15.8l-7.2,21.9H8.4L1.2,15.8L20,2.2L38.8,15.8z")
  .Carousel-bars(v-if="!slide")
    .Carousel-bar(v-for="n in 3" v-bind:class="isMenu ? 'is-hidden': ''" ref="bars")
</template>

<script>
import Glitch from './Glitch'
import Lock from './Lock'

let kute

if (process.client) {
  kute = require('kute.js')
  require('kute.js/kute-svg')
}

export default {
  data() {
    return {
      index: 0,
      isLabelized: true,
      isProgressed: false,
      isLocked: false
    }
  },
  props: [
    'isMenu',
    'range',
    'slide'
  ],
  components: {
    Glitch,
    Lock
  },
  methods: {
    modulo: (n, m) => {
      return ((n % m) + m) % m;
    },
    turnLeft: function() {
      if (!this.slide) {
        const tweenLeft = kute.to('#Carousel-left', { path: `#Carousel-left-${this.modulo(this.range - 1, 4)}` })
        const tweenRight = kute.to(`#Carousel-right`, { path: `#Carousel-right-${this.modulo(this.range - 1, 4)}` })
        tweenLeft.start()
        tweenRight.start()
      }
    },
    turnRight: function() {
      if (!this.slide) {
        const tweenLeft = kute.to('#Carousel-left', { path: `#Carousel-left-${this.modulo(this.range + 1, 4)}` })
        const tweenRight = kute.to(`#Carousel-right`, { path: `#Carousel-right-${this.modulo(this.range + 1, 4)}` })
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
    if (this.slide === undefined || !this.$route.params.from) this.isLabelized = false
  },
  mounted() {
    const _progressCarousel = this.$refs.progress
    const _labelsCarousel = Array.from(this.$el.querySelectorAll('.Carousel-label'))
    const _extrasCarousel = Array.from(this.$el.querySelectorAll('.Carousel-extra'))
    const _left = this.$refs.left
    const _right = this.$refs.right

    setTimeout(() => {
      this.isLabelized = true
      setTimeout(() => {
        this.isProgressed = true
        this.isLocked = false
        setTimeout(() => {
          for (const _extraCarousel of _extrasCarousel) _extraCarousel.classList.remove('is-hidden')
        }, 1000)
      }, 500)
    }, 1000)

    if (_left) _left.setAttribute('d', this.$el.querySelector(`#Carousel-left-${this.index}`).getAttribute('d'))
    if (_right) _right.setAttribute('d', this.$el.querySelector(`#Carousel-right-${this.index}`).getAttribute('d'))

    if (this.slide) {
      const tween = kute.to(`#Carousel-right`, { path: `#Carousel-right-${this.modulo(this.slide - 1, 4)}` })
      tween.start()

      const _titleCarousel = this.$refs.title
      const _subtitleCarousel = this.$refs.subtitle
      const _additionalCarousel = this.$refs.additional

      setTimeout(() => {
        _titleCarousel.classList.remove('is-hidden')
        setTimeout(() => {
          _subtitleCarousel.classList.remove('is-hidden')
        }, 500)

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
        if (window.innerWidth <= 860) {
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
          if (window.innerWidth <= 860) {
            _additionalCarousel.style.opacity = '0'
            _subtitleCarousel.style.transform = `none`
          }
        })
      }, 500)
    } else {
      const _containerCarousel = this.$refs.container
      const _barsCarousel = this.$refs.bars
      let _containerOffset = _containerCarousel.offsetTop

      window.addEventListener('resize', () => { _containerOffset = _containerCarousel.getBoundingClientRect().top })

      const setOffset = () => {
        for (const _barCarousel of _barsCarousel) {
          if (_barCarousel.classList.contains('is-hidden')) _barCarousel.style.top = null
          else _barCarousel.style.top = `${_containerOffset}px`
        }
        if (_barsCarousel.length > 0) window.requestAnimationFrame(setOffset)
        else window.cancelAnimationFrame(setOffset)
      }
      setOffset()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Carousel {
  $rootCarousel: &;
  $extraSize: $margin-l;

  width: 100%;
  height: 100%;

  &-container {
    position: relative;
    width: 100%;
    margin-top: $margin-g;
    transition: margin-top $easing-duration;

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
      transition: transform $easing-duration;
      will-change: transform;

      @media (max-width: #{grid-media(6)}) {
        transform: translate(-50%, -50%) rotateZ(90deg);
      }
    }

    &.is-hidden {
      &::before {
        display: none;
      }
    }

    &--case {
      &::before {
        transform: translate(-50%, -50%) rotateZ(90deg);
      }

      #{$rootCarousel}-item {
        &--0 {
          transform: translate(-50%, -50%);

          @media (min-height: #{grid-media(8.5) + 1px}) {
            transform: translate(-50%, -50%) scale(1);
          }

          @media (max-height: #{grid-media(6.5)}) {
            transform: translate(-50%, -50%) scale(.875);
          }

          @media (max-height: #{grid-media(6)}) {
            transform: translate(-50%, -50%) scale(.75);
          }

          @media (max-width: #{grid-media(4)}) {
            transform: translate(-50%, -50%) scale(.875);
          }

          @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(6.5)}) {
            transform: translate(-50%, -50%) scale(.75);
          }

          @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(3)}) {
            transform: translate(-50%, -50%) scale(.5);
          }
        }
      }

      #{$rootCarousel}-title {
        color: rgba($white, .75);
        bottom: 100%;
        margin-bottom: 0;

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

      #{$rootCarousel}-main {
        transform: translateY(calc(50% + #{- $margin-b - $margin-m}));

        @media (max-height: #{grid-media(7.5)}), (max-width: #{grid-media(6)}) {
          transform: none !important;
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

        @media (max-height: #{grid-media(5.5)}) {
          width: grid(4);
        }

        @media (max-height: #{grid-media(4.5)}) {
          opacity: 0;
        }

        @media (max-width: #{grid-media(6)}) {
          transform: translate(-50%, calc(-50% + #{$margin-t})) rotateZ(90deg);
        }

        @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(7.5)}) {
          transform: translate(-50%, 50%) rotateZ(90deg);
        }

        @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(5.75)}) {
          opacity: 0;
        }

        @media (max-width: #{grid-media(4)}) {
          width: grid(4);
          transform: translate(-50%, calc(-50% + #{$margin-s})) rotateZ(90deg);
        }

        @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(6.5)}) {
          opacity: 0;
        }

        > * {
          &:first-child {
            opacity: 0;
          }
        }
      }

      #{$rootCarousel}-progress {
        margin-bottom: - $margin-n;
        opacity: 0;
      }
    }

    @media (max-height: #{grid-media(9)}) {
      margin-top: $margin-b;
    }

    @media (max-height: #{grid-media(8)}) and (min-width: #{grid-media(6)}) {
      margin-top: $margin-l + $margin-t;
    }

    @media (max-height: #{grid-media(6)}) {
      margin-top: $margin-m + $margin-t;
    }

    @media (max-height: #{grid-media(7)}) and (max-width: #{grid-media(6)}) {
      margin-top: $margin-l + $margin-t;
    }

    @media (max-height: #{grid-media(6)}) and (max-width: #{grid-media(6)}) {
      margin-top: $margin-l;
    }

    @media (max-height: #{grid-media(4)}) {
      margin-top: $margin-r + $margin-t;
    }

    @media (max-height: #{grid-media(3.5)}) {
      margin-top: $margin-r;
    }

    @media (max-height: #{grid-media(3)}) {
      margin-top: $margin-s;
    }
  }

  &-content {
    position: relative;
    width: 100%;
    opacity: 1;
    transition: opacity $easing-duration;
    will-change: opacity;

    &.is-hidden {
      opacity: 0;
      user-select: none;
      pointer-events: none;
    }
  }

  &-item {
    position: absolute;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    transition: all $easing-duration;
    will-change: opacity, transform;

    &:hover {
      #{$rootCarousel}-lock {
        opacity: .5;
      }
    }

    &--0 {
      left: 50%;
      opacity: 1;
      transform: translate(-50%, -50%) scale(.875);

      @media
      (max-width: #{grid-media(6)}) and (max-height: #{grid-media(6.5)}),
      (max-width: #{grid-media(4)}) {
        transform: translate(-50%, -50%) scale(.625);
      }

      @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(4.5)}) {
        transform: translate(-50%, -50%) scale(.5);
      }

      @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(6.5)}) {
        transform: translate(-50%, -50%) scale(.5);
      }

      + #{$rootCarousel}-label {
        opacity: 1;
      }

      #{$rootCarousel}-extra {
        opacity: 1;
        transition-delay: .5s;
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
      display: none;
      left: 50%;

      + #{$rootCarousel}-label {
        display: none;
      }
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

    &--forbidden {
      cursor: pointer;

      &:hover {
        filter: grayscale(100%);
      }
    }

    @media (max-width: #{grid-media(6)}) {
      left: 50%;
    }
  }

  &-image {
    position: relative;
    user-select: none;
    transition: transform $easing-duration;
    will-change: transform;

    @media (min-height: #{grid-media(9.5) + 1px}) {
      transform: scale(1.25) !important;
    }

    @media (min-height: #{grid-media(8.5) + 1px}) {
      transform: scale(1.125);
    }

    @media (max-height: #{grid-media(4)}) {
      transform: scale(.75);
    }
  }

  &-image,
  &-layer,
  &-neon,
  &-extra,
  &-lock {
    pointer-events: none;
  }

  &-layer {
    position: absolute;
    top: 0;
    left: 0;

    &--back {
      z-index: -1;
    }

    &--front {
      z-index: 1;
    }
  }

  &-lock {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    width: auto;
    height: 20%;
    opacity: .25;
    transform: translate(-50%, -50%);
    transition: opacity $easing-duration, height $easing-duration;
    will-change: opacity;

    &.is-hidden {
      opacity: 0;
    }

    @media (max-height: #{grid-media(7.5)}) {
      height: 40%;
    }
  }

  &-extra {
    opacity: 0;
    transition: opacity $easing-duration;
    transition-delay: 0s;
    will-change: opacity;

    &.is-hidden {
      opacity: 0 !important;
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
    transition: opacity $easing-duration, transform $easing-duration;
    will-change: opacity, transform;
    user-select: none;

    &.is-hidden {
      opacity: 0 !important;
      transform: translate(-50%, #{$margin-t}) !important;
    }

    @media (max-height: #{grid-media(8.5)}) {
      bottom: - $margin-b - $margin-m;
    }
  }

  &-title {
    position: absolute;
    bottom: 100%;
    left: 50%;
    display: inline-block;
    margin-bottom: $margin-t;
    color: $dark;
    font-size: 12rem;
    font-weight: 700;
    letter-spacing: .0625em;
    text-transform: uppercase;
    pointer-events: none;
    transition: all $easing-duration;
    transform: translateX(-50%);
    will-change: transform;

    &.is-hidden {
      opacity: 0;
      transform: translate(-50%, calc(50% + #{- $margin-b - $margin-m + $margin-t}));
    }

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

  &-main {
    display: inline-block;
    transition: transform $easing-duration;
  }

  &-subtitle {
    position: relative;
    font-size: 2rem;
    transition: all $easing-duration;
    will-change: transform;

    &.is-hidden {
      opacity: 0;
    }

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
    transition: opacity $easing-duration;
    will-change: opacity;
    pointer-events: none;
  }

  &-buttons {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    opacity: 1;
    transform-origin: 50% 50%;
    transform: translate(-50%, -50%);
    transition: all $easing-duration;
    user-select: none;
    will-change: transform;

    &.is-hidden {
      opacity: 0;
      width: calc(100vw + 100vh);
    }

    @media (max-width: #{grid-media(6)}) {
      width: calc(100% + #{$extraSize});
      transform: translate(-50%, -50%) rotateZ(90deg);
    }

    @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(8.5) - 1px}) {
      width: calc(100% + #{$extraSize / 2});
    }

    @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(6.5)}) {
      width: 100%;
    }

    @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(4.5)}) {
      width: calc(100% - #{$extraSize / 4});
    }

    @media (max-width: #{grid-media(6)}) and (max-height: #{grid-media(4)}) {
      width: calc(100% - #{$extraSize * .75});
    }

    @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(6.5)}) {
      width: calc(100% + #{$extraSize / 2});
    }

    @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(4.5)}) {
      width: calc(100% + #{$extraSize / 4});
    }

    @media (max-width: #{grid-media(4)}) and (max-height: #{grid-media(4)}) {
      width: calc(100% - #{$extraSize / 4});
    }
  }

  &-button {
    cursor: pointer;
    transition: opacity $easing-duration;

    &:hover {
      #{$rootCarousel}-shape {
        transform: scale(1);
      }
    }

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
    transition: transform $easing-duration;
    transform-origin: 50% 50%;
    transform: scale(.875);
    visibility: hidden;
    pointer-events: none;

    &--arrow {
      pointer-events: none;
    }

    &.is-active {
      visibility: visible;
    }

    @media (max-width: #{grid-media(6)}) {
      stroke: none;
      visibility: visible;

      &--arrow {
        stroke: $white;
        transform: translateY(0);
        will-change: transform;
      }
    }
  }

  &-progress {
    position: absolute;
    left: 50%;
    bottom: - $margin-b - $margin-l - $margin-s;
    opacity: 1;
    transform: translate(-50%, 100%);
    transition: all $easing-duration;
    will-change: opacity, transform;

    &.is-hidden {
      opacity: 0;
      transform: translate(-50%, calc(100% + #{$margin-t}));
    }

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

    @media (max-height: #{grid-media(5.5)}) {
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
    margin: 0 $margin-n * .75;
    fill: rgba($white, 0);
    stroke-width: 1;
    stroke: $white;
    transition: all $easing-duration;
    will-change: transform;

    &.is-active {
      fill: $white;
      transform: scale(1.5);
    }

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }

  &-bar {
    position: absolute;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: .1rem;
    background-color: $dark;
    pointer-events: none;
    opacity: 0;
    transition: top $easing-duration;
    will-change: opacity;

    &.is-visible {
      opacity: 1;
    }

    &.is-hidden {
      opacity: 1;

      &:nth-of-type(1) {
        top: 25%;
      }

      &:nth-of-type(2) {
        top: 50%;
      }

      &:nth-of-type(3) {
        top: 75%;
      }
    }
  }
}
</style>
