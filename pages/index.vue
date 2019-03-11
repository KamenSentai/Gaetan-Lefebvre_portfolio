<template lang="pug">
Header(
  :index="data.colors.indexOf(color) || data.colors.indexOf(shape)"
  :hasProject="false"
  :hasAbout="true"
  :hasHome="false"
  jumbotron="hero"
  type="home"
  :data="data"
)
</template>

<script>
import Header from '~/components/Header'

export default {
  data() {
    return {
      data: {
        colors: [
          "green",
          "blue",
          "red",
          "yellow"
        ],
        shapes: [
          "circle",
          "triangle",
          "square",
          "pentagone"
        ],
        home: {
          pages: [
            {
              above: "Hi, I'm",
              first: "Gaëtan",
              last: "Lefebvre",
              paragraphs: [
                "Passionate about design and motion design , I am currently a 4th year student at Hetic. I was recently UX/UI junior designer at BuddyBuddy. Now, I’m looking for an internship in interactive design."
              ]
            }
          ]
        }
      },
      color: null,
      shape: null
    }
  },
  created() {
    this.color = this.$route.params.color
    this.shape = this.$route.params.shape
  },
  components: {
    Header
  }
}
</script>
