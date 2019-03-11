<template lang="pug">
.Mouse(v-bind:class="state")
  .Mouse-frame
    .Mouse-hud
  svg.Mouse-pointer(width="40px" height="40px" viewBox="0 0 40 40")
    path#Mouse-circle.Mouse-shape(d="M38.8,20c0,5.2-2.1,9.9-5.5,13.3s-8.1,5.5-13.3,5.5c-5.2,0-9.9-2.1-13.3-5.5C3.3,29.9,1.2,25.2,1.2,20 c0-5.2,2.1-9.9,5.5-13.3S14.8,1.2,20,1.2c5.2,0,9.9,2.1,13.3,5.5C36.7,10.1,38.8,14.8,38.8,20z")
    path#Mouse-triangle.Mouse-shape(d="M20,1.1l18.8,32.5H1.2L20,1.1z")
    path#Mouse-square.Mouse-shape(d="M38.9,38.8H20.2H1.4V1.2h37.5V38.8z")
    path#Mouse-pentagone.Mouse-shape(d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
    path#Mouse-shape.Mouse-shape.is-active(:data-shape="shape")
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
    let inceaseFrame = false
    let menuFrame = false
    let textFrame = false
    let beatPointer = false
    let ratio = '1'
    const currentSize = _mouseHud.getBoundingClientRect().width
    const sizeRate = 1.375

    this.setShape()
    this.updateShape()

    let screen = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let positionPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let positionFrame = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    window.addEventListener('mousemove', event => {
      const target = event.target
      reduceFrame = target.classList.contains('Cursor-frame--reduced')
      inceaseFrame = target.classList.contains('Cursor-frame--increase')
      menuFrame = target.classList.contains('Cursor-frame--menu')
      textFrame = target.classList.contains('Cursor-frame--text')
      beatPointer = target.classList.contains('Cursor-pointer--beat')

      if (inceaseFrame || beatPointer) {
        mouse.x = target.getBoundingClientRect().left + target.getBoundingClientRect().width / 2 - _body.getBoundingClientRect().left
        mouse.y = target.getBoundingClientRect().top + target.getBoundingClientRect().height / 2 - _body.getBoundingClientRect().top

        if (inceaseFrame) {
          const size = target.getBoundingClientRect().width * sizeRate
          ratio = size / currentSize
        }
      } else if (menuFrame) {
        mouse.x = window.innerWidth
        mouse.y = window.innerHeight / 2
        const size = target.getBoundingClientRect().width
        ratio = size / currentSize
      } else {
        mouse.x = event.clientX - _body.getBoundingClientRect().left
        mouse.y = event.clientY - _body.getBoundingClientRect().top
      }
      screen.x = event.clientX
      screen.y = event.clientY
    })

    window.addEventListener('scroll', () => {
      mouse.x = screen.x - _body.getBoundingClientRect().left
      mouse.y = screen.y - _body.getBoundingClientRect().top
    })

    const animateCursor = () => {
      const ratePointer = !beatPointer && !inceaseFrame && !menuFrame ? .25 : .125
      const rateFrame = !inceaseFrame ? .1875 : .0625
      positionPointer.x += (mouse.x - positionPointer.x) * ratePointer
      positionPointer.y += (mouse.y - positionPointer.y) * ratePointer
      positionFrame.x += (mouse.x - positionFrame.x) * rateFrame
      positionFrame.y += (mouse.y - positionFrame.y) * rateFrame

      _mousePointer.style.transform = `translate(${positionPointer.x}px, ${positionPointer.y}px)`
      _mouseFrame.style.transform = `translate(${positionFrame.x}px, ${positionFrame.y}px)`

      if (reduceFrame || inceaseFrame || menuFrame) _mousePointer.classList.add('is-reduced')
      else _mousePointer.classList.remove('is-reduced')
      if (reduceFrame) _mouseHud.classList.add('is-reduced')
      else _mouseHud.classList.remove('is-reduced')
      if (inceaseFrame || menuFrame) _mouseHud.style.transform = `scale(${ratio})`
      else _mouseHud.style.transform = null
      if (textFrame) _mouseHud.classList.add('is-lighten')
      else _mouseHud.classList.remove('is-lighten')
      if (beatPointer) _mousePointer.classList.add('is-beating')
      else _mousePointer.classList.remove('is-beating')

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
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Mouse {
  $rootMouse: &;
  $cursorSize: 4rem;
  $pointerSize: .8rem;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: $cursorSize;
  height: $cursorSize;
  transition: none;
  pointer-events: none;

  &.is-hidden {
    display: none;
  }

  &[data-color="white"] {
    #{$rootMouse}-hud {
      border-color: $dark;
    }

    #{$rootMouse}-shape {
      &.is-active {
        fill: $white;
        transition-delay: 0;
      }
    }
  }

  &[data-color="black"] {
    #{$rootMouse}-hud {
      fill: $grey;
    }

    #{$rootMouse}-shape {
      &.is-active {
        transition-delay: 0;
        fill: $black;
      }
    }

    &[data-forced="white"] {
      #{$rootMouse}-hud {
        border-color: $dark;
      }

      #{$rootMouse}-shape {
        &.is-active {
          fill: $white;
          transition-delay: 0;
        }
      }
    }
  }

  &-frame,
  &-pointer {
    margin-top: - $cursorSize / 2;
    margin-left: - $cursorSize / 2;
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
    transition: all $easing-duration;
    will-change: transform;

    &.is-reduced {
      transform: scale(0);
    }

    &.is-lighten {
      border-color: $white;
    }
  }

  &-pointer {
    position: absolute;
    width: $pointerSize;
    height: $pointerSize;
    stroke: none;
    transition: fill $easing-duration;

    &.is-beating {
      #{$rootMouse}-shape {
        &.is-active {
          transform: scale(.75);
          animation: mini-scale 2s ease-in-out infinite;
        }
      }
    }

    &.is-reduced {
      #{$rootMouse}-shape {
        &.is-active {
          transform: scale(0);
        }
      }
    }
  }

  &-shape {
    visibility: hidden;

    &.is-active {
      fill: $white;
      transform-origin: 50% 50%;
      transition: fill $easing-duration, transform $easing-duration;
      transition-delay: .25s;
      visibility: visible;
      will-change: transform;
    }
  }
}
</style>
