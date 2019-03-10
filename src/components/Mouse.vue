<template lang="pug">
.Mouse(v-bind:class="state")
  .Mouse-frame
    .Mouse-hud
  svg.Mouse-pointer(width="40px" height="40px" viewBox="0 0 40 40")
    path#Mouse-circle.Mouse-shape(d="M20,38.8C9.6,38.8,1.2,30.4,1.2,20S9.6,1.2,20,1.2S38.8,9.6,38.8,20S30.4,38.8,20,38.8z")
    path#Mouse-triangle.Mouse-shape(d="M38.8,33.6H1.2L20,1.1L38.8,33.6z")
    path#Mouse-square.Mouse-shape(d="M20,1.2L38.8,20L20,38.8L1.2,20L20,1.2z")
    path#Mouse-pentagone.Mouse-shape(d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
    path#Mouse-shape.Mouse-shape.is-active(:data-shape="shape")
</template>

<script>
import kute from 'kute.js'
import 'kute.js/kute-svg'

export default {
  data() {
    return {
      state: '',
      shape: ''
    }
  },
  methods: {
    findShape: function() {
      const _header = document.querySelector('.Header')

      if (_header) {
        const shapes = [
          'circle',
          'triangle',
          'square',
          'pentagone'
        ]

        for (const shape of shapes) if (_header.classList.contains(`Header--${shape}`)) return shape
      }
    },
    setShape: function() {
      if (!this.shape || this.shape === '') window.requestAnimationFrame(this.setShape)
      else {
        window.cancelAnimationFrame(this.setShape)
        this.$el.querySelector('#Mouse-shape').setAttribute('d', this.$el.querySelector(`#Mouse-${this.shape}`).getAttribute('d'))
      }
    },
    updateShape: function() {
      this.shape = this.findShape()
      const _shape = this.$el.querySelector('#Mouse-shape')
      const _target = this.$el.querySelector(`#Mouse-${this.shape}`)

      if (_target && _shape.dataset.shape && _shape.dataset.shape !== this.shape) {
        const tween = kute.to('#Mouse-shape', { path: `#Mouse-${this.shape}` })
        tween.start()
      }

      window.requestAnimationFrame(this.updateShape)
    }
  },
  mounted() {
    const _body = document.body
    const _mouse = this.$el
    const _mousePointer = _mouse.querySelector('.Mouse-pointer')
    const _mouseFrame = _mouse.querySelector('.Mouse-frame')
    const _mouseHud = _mouse.querySelector('.Mouse-hud')

    let reduceFrame = false

    this.setShape()
    this.updateShape()

    let screen = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let positionPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let positionCircle = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    window.addEventListener('mousemove', event => {
      screen.x = event.clientX
      screen.y = event.clientY
      mouse.x = event.clientX - _body.getBoundingClientRect().left
      mouse.y = event.clientY - _body.getBoundingClientRect().top

      reduceFrame = event.target.classList.contains('Cursor-frame--reduced')
    })

    window.addEventListener('scroll', () => {
      mouse.x = screen.x - _body.getBoundingClientRect().left
      mouse.y = screen.y - _body.getBoundingClientRect().top
    })

    const animateCursor = () => {
      positionPointer.x += (mouse.x - positionPointer.x) * .25
      positionPointer.y += (mouse.y - positionPointer.y) * .25
      positionCircle.x += (mouse.x - positionCircle.x) * .1875
      positionCircle.y += (mouse.y - positionCircle.y) * .1875

      _mousePointer.style.transform = `translate(${positionPointer.x}px, ${positionPointer.y}px)`
      _mouseFrame.style.transform = `translate(${positionCircle.x}px, ${positionCircle.y}px)`

      if (reduceFrame) _mouseHud.classList.add('is-reduced')
      else _mouseHud.classList.remove('is-reduced')

      window.requestAnimationFrame(animateCursor)
    }
    animateCursor()

    window.addEventListener('resize', () => {
      if (
        navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
      ) this.state = 'is-hidden'
      else this.state = 'is-active'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Mouse {
  $cursorSize: 4rem;

  position: absolute;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: $cursorSize;
  height: $cursorSize;
  margin-top: - $cursorSize / 2;
  margin-left: - $cursorSize / 2;
  border-radius: 100%;
  transition: none;
  pointer-events: none;

  &.is-hidden {
    display: none;
  }

  &-frame,
  &-pointer {
    transform: translate(50vw, 50vh);
    will-change: transform;
  }

  &-frame {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &-hud {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: .1rem solid $dark;
    transform-origin: 50% 50%;
    transition: transform $easing-duration;
    will-change: transform;

    &.is-reduced {
      transform: scale(0);
    }
  }

  &-pointer {
    position: absolute;
    width: .8rem;
    height: .8rem;
    filter: drop-shadow(#{$shadow-regular});
    fill: $white;
    stroke: none;
  }

  &-shape {
    visibility: hidden;

    &.is-active {
      visibility: visible;
    }
  }
}
</style>
