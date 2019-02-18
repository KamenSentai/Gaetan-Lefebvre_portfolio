<template lang="pug">
Header(
  :index="data.colors.indexOf(color) || data.colors.indexOf(shape)"
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
      color: null,
      shape: null
    }
  },
  created() {
    this.color = this.$route.params.color
    this.shape = this.$route.params.shape
  },
  props: [
    'data'
  ],
  components: {
    Header
  }
}
</script>
