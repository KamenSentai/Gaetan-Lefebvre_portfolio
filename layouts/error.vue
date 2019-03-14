<template lang="pug">
div
  Mouse(:x="x" :y="y")
  Header(
    :color="data[index].color"
    :shape="data[index].shape"
    :hasProject="false"
    :hasAbout="false"
    :hasHome="true"
    jumbotron="error"
  )
</template>

<script>
import Mouse from '~/components/Mouse'
import Header from '~/components/Header'

export default {
  data() {
    return {
      data: [
        { color: 'green', shape: 'circle' },
        { color: 'blue', shape: 'triangle' },
        { color: 'red', shape: 'square' },
        { color: 'yellow', shape: 'pentagone' }
      ],
      index: Math.floor(new Date().getSeconds() / 60 * 4),
      x: 0,
      y: 0
    }
  },
  props: [
    'error'
  ],
  components: {
    Mouse,
    Header
  },
  mounted() {
    window.addEventListener('mousemove', event => {
      this.x = event.clientX
      this.y = event.clientY
    })
  }
}
</script>
