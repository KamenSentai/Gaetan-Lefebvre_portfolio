<template lang="pug">
  div
    Header(
      :color="themes[theme].color"
      :shape="themes[theme].shape"
      jumbotron="error"
    )
</template>

<script>
import Header from '../components/Header'

export default {
  metaInfo: {
    titleTemplate: '%s | Page not found',
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
      theme: null,
      text: null
    }
  },
  components: {
    Header
  },
  beforeMount() {
    this.theme = Math.floor(Math.random() * this.themes.length)
  }
}
</script>
