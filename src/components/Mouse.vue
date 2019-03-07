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

    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      this.className = 'is-hidden'
    } else {
      let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

      window.addEventListener('mousemove', event => {
        mouse.x = event.clientX
        mouse.y = event.clientY

        _mousePointer.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
      })

      const animateCircle = () => {
        position.x += (mouse.x - position.x) * .125
        position.y += (mouse.y - position.y) * .125

        _mouseCircle.style.transform = `translate(${position.x}px, ${position.y}px)`
        window.requestAnimationFrame(animateCircle)
      }
      animateCircle()
    }
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
  }

  &-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border: .1rem solid $dark;
  }
}
</style>
