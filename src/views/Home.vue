<template lang="pug">
  div
    Header(
      :color="color || data.colors[0]"
      :shape="shape || data.shapes[0]"
      jumbotron="home"
      :home="data"
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
