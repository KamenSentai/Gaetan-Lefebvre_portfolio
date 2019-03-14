<template lang="pug">
  div
    Mouse(:x="x" :y="y")
    nuxt
</template>

<script>
import Mouse from '~/components/Mouse'

export default {
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  components: {
    Mouse
  },
  mounted() {
    window.addEventListener('mousemove', event => {
      this.x = event.clientX
      this.y = event.clientY
    })
  }
}
</script>
