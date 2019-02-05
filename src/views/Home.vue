<template lang="pug">
  div
    Header(
      :color="themes[theme].color"
      :shape="themes[theme].shape"
      jumbotron="home"
      :data="data"
    )
</template>

<script>
import Header from '../components/Header'

export default {
  metaInfo: {
    titleTemplate: '%s | Portfolio',
    meta: [
      { name: 'description', content: '' }
    ]
  },
  data() {
    return {
      themes: [
        { color: 'green', shape: 'circle' },
        { color: 'blue', shape: 'triangle' },
        { color: 'red', shape: 'square' },
        { color: 'yellow', shape: 'pentagone' }
      ],
      theme: null
    }
  },
  props: [
    'data'
  ],
  components: {
    Header
  },
  beforeMount() {
    this.theme = Math.floor(Math.random() * this.themes.length)
  }
}
</script>
