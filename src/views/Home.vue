<template lang="pug">
  div
    Header(
      color="green"
      jumbotron="presentation"
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
  components: {
    Header
  }
}
</script>
