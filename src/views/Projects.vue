<template lang="pug">
  div
    Header(
      color="green"
      shape="circle"
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
  components: {
    Header
  }
}
</script>
