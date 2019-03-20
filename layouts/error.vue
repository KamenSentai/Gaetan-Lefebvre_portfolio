<template lang="pug">
.Error
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
import Header from '~/components/Header'

export default {
  head() {
    return {
      title: 'Oops, page not found',
      meta: [
        { hid: 'description', name: 'description', content: 'We are not sure that you find your happiness on this page ... Although you will be surprised.' }
      ]
    }
  },

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
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/mixins';

.Error {
  @include full-size();
}
</style>
