<template lang="pug">
.Mouse(v-bind:class="className")
  .Mouse-pointer
  .Mouse-circle
</template>

<script>
export default {
  data() {
    return {
      className: ''
    }
  },
  mounted() {
    const _mouse = this.$el
    const _mousePointer = _mouse.querySelector('.Mouse-pointer')
    const _mouseCircle = _mouse.querySelector('.Mouse-circle')

    const _body = document.body
    let screen = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let positionPointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let positionCircle = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    window.addEventListener('mousemove', event => {
      screen.x = event.clientX
      screen.y = event.clientY
      mouse.x = event.clientX - _body.getBoundingClientRect().left
      mouse.y = event.clientY - _body.getBoundingClientRect().top
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
      _mouseCircle.style.transform = `translate(${positionCircle.x}px, ${positionCircle.y}px)`
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
      ) this.className = 'is-hidden'
      else this.className = 'is-active'
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
  pointer-events: none;

  &.is-hidden {
    display: none;
  }

  &-pointer,
  &-circle {
    border-radius: 100%;
    transform: translate(50vw, 50vh);
    will-change: transform;
  }

  &-pointer {
    position: absolute;
    width: .8rem;
    height: .8rem;
    background-color: $white;
    box-shadow: $shadow-regular;
  }

  &-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border: .1rem solid $dark;
  }
}
</style>
