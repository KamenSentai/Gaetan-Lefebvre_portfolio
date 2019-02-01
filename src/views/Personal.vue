<template lang="pug">
  div
    Header(color="yellow")
    Footer(
      left="buddy-buddy"
      project="personal"
      right="pocketcare"
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
