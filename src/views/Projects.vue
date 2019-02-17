<template lang="pug">
div
  Header(
    :color="color || data[0].color"
    :shape="shape || data[0].shape"
    jumbotron="slider"
  )
</template>

<script>
import Header from '../components/Header'

export default {
  metaInfo: {
    titleTemplate: '%s | Projects',
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
