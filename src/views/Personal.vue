<template lang="pug">
div
  Header(:color="data.color" :shape="data.shape")
  .Page(v-bind:class="`Page--${data.color}`")
  Footer(
    to="pocketcare"
    title="Pocketcare"
  )
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'
import Article from '../components/Article'
import Footer from '../components/Footer'

export default {
  metaInfo: {
    titleTemplate: '%s | Pocketcare',
    meta: [
      { name: 'description', content: '' }
    ]
  },
  components: {
    Header,
    Post,
    Article,
    Footer
  }
}
</script>
