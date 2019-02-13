<template lang="pug">
  div
    Header(
      jumbotron="about"
      :about="data"
    )
</template>

<script>
import Header from '../components/Header'

export default {
  metaInfo: {
    titleTemplate: '%s | About',
    meta: [
      { name: 'description', content: '' }
    ]
  },
  props: [
    'data'
  ],
  components: {
    Header
  }
}
</script>
