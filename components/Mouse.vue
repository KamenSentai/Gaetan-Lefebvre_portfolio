<template lang="pug">
.Mouse(v-bind:class="state")
  .Mouse-frame(ref="frame")
    .Mouse-hud(ref="hud")
      .Mouse-group
        img.Mouse-text(v-if="$route.name && $route.name === 'projects'" src="~static/images/Mouse/more.png" alt="More")
        img.Mouse-text(v-else-if="$route.name && $route.name.includes('projects-')" src="~static/images/Mouse/next.png" alt="Next")
  svg.Mouse-pointer(ref="pointer" width="40px" height="40px" viewBox="0 0 40 40")
    path#Mouse-circle.Mouse-shape(d="M38.8,20c0,5.2-2.1,9.9-5.5,13.3s-8.1,5.5-13.3,5.5c-5.2,0-9.9-2.1-13.3-5.5C3.3,29.9,1.2,25.2,1.2,20 c0-5.2,2.1-9.9,5.5-13.3S14.8,1.2,20,1.2c5.2,0,9.9,2.1,13.3,5.5C36.7,10.1,38.8,14.8,38.8,20z")
    path#Mouse-triangle.Mouse-shape(d="M20,1.1l18.8,32.5H1.2L20,1.1z")
    path#Mouse-square.Mouse-shape(d="M20,1.2L38.8,20l-9.4,9.4L20,38.8L1.2,20L20,1.2z")
    path#Mouse-pentagone.Mouse-shape(d="M38.8,14.8l-7.2,22H8.4l-7.2-22L20,1.2L38.8,14.8z")
    path#Mouse-shape.Mouse-shape.is-active(:data-shape="shape" ref="shape")
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
  props : [
    'route'
  ],
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
        this.$refs.shape.setAttribute('d', this.$el.querySelector(`#Mouse-${this.shape}`).getAttribute('d'))
      }
    },
    updateShape: function() {
      this.shape = this.findShape()
      const _shape = this.$refs.shape
      const _target = this.$el.querySelector(`#Mouse-${this.shape}`)

      if (_target && _shape) if (_shape.dataset) if (_shape.dataset.shape) if (_shape.dataset.shape !== this.shape) {
        const tween = kute.to('#Mouse-shape', { path: `#Mouse-${this.shape}` })
        tween.start()
      }

      window.requestAnimationFrame(this.updateShape)
    }
  },
  mounted() {
    const _body = document.body
    const _pointerMouse = this.$refs.pointer
    const _frameMouse = this.$refs.frame
    const _hudMouse = this.$refs.hud

    let currentRoute = this.$route.name
    let reduceFrame = false
    let inceaseFrame = false
    let menuFrame = false
    let textFrame = false
    let beatPointer = false
    let ratio = '1'
    const currentSize = _hudMouse.getBoundingClientRect().width
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
        mouse.x = screen.x - _body.getBoundingClientRect().left
        mouse.y = screen.y - _body.getBoundingClientRect().top
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

      _pointerMouse.style.transform = `translate(${positionPointer.x}px, ${positionPointer.y}px)`
      _frameMouse.style.transform = `translate(${positionFrame.x}px, ${positionFrame.y}px)`

      if (reduceFrame || inceaseFrame || menuFrame) _pointerMouse.classList.add('is-reduced')
      else _pointerMouse.classList.remove('is-reduced')
      if (reduceFrame) _hudMouse.classList.add('is-reduced')
      else _hudMouse.classList.remove('is-reduced')
      if (inceaseFrame || menuFrame) _hudMouse.style.transform = `scale(${ratio})`
      else _hudMouse.style.transform = null
      if (textFrame || beatPointer) _pointerMouse.classList.add('is-lighten')
      else _pointerMouse.classList.remove('is-lighten')
      if (textFrame) _hudMouse.classList.add('is-lighten')
      else _hudMouse.classList.remove('is-lighten')
      if (beatPointer) _pointerMouse.classList.add('is-beating')
      else _pointerMouse.classList.remove('is-beating')

      if (currentRoute !== this.$route.name) {
        reduceFrame = false
        inceaseFrame = false
        menuFrame = false
        textFrame = false
        beatPointer = false
        currentRoute = this.$route.name
      }

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
  $textRate: 75%;

  position: absolute;
  top: calc(50vh - #{$cursorSize / 2});
  left: calc(50vw - #{$cursorSize / 2});
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

  &-frame,
  &-pointer {
    margin-top: - 50vh;
    margin-left: - 50vw;
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
      border-color: $white !important;
      opacity: 1;

      #{$rootMouse}-text {
        transform: scale(1);
      }
    }
  }

  &-pointer {
    position: absolute;
    width: $pointerSize;
    height: $pointerSize;
    stroke: none;

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

    &.is-lighten {
      #{$rootMouse}-shape {
        stroke: $white;
      }
    }
  }

  &-shape {
    transform-origin: 50% 50%;
    visibility: hidden;

    &.is-active {
      fill: $white;
      stroke: $black;
      stroke-width: 2;
      visibility: visible;
      will-change: transform;
    }
  }

  &-group {
    width: 100%;
    height: 100%;
    transform-origin: 50% 50%;
    animation: turn-hud 3.75s linear infinite;
  }

  &-text {
    position: absolute;
    left: - $textRate / 2;
    top: - $textRate / 2;
    width: 100% + $textRate;
    height: 100% + $textRate;
    transform-origin: 50% 50%;
    transform: scale(0);
    transition: transform $easing-duration;
  }
}
</style>
