<template lang="pug">
Header(
  :index="data.colors.indexOf(color) || data.colors.indexOf(shape)"
  :hasProject="true"
  :hasAbout="true"
  :hasHome="false"
  jumbotron="carousel"
  :data="data"
)
</template>

<script>
import Header from '~/components/Header'
import ProjectsController from '~/assets/scripts/ProjectsController'

export default {
  head() {
    return {
      title: 'Gaëtan LEFEBVRE | Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Find my latest projects Pocketcare, Tesla and Buddy Buddy with there case study pages.' }
      ]
    }
  },

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
        projects: [
          {
            name: "Pocketcare",
            slug: "pocketcare",
            color: "green",
            shape: "circle"
          }, {
            name: "Tesla",
            slug: "tesla",
            color: "blue",
            shape: "triangle"
          }, {
            name: "Buddy Buddy",
            slug: "buddy-buddy",
            color: "red",
            shape: "square"
          }, {
            name: "Personal",
            slug: "personal",
            color: "yellow",
            shape: "pentagone"
          }
        ]
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
  },

  transition: {
    name: 'projects',
    mode: 'out-in',
    enter(el, done) {
      new ProjectsController().enter(el, done)
    },
    leave(el, done) {
      new ProjectsController(this).leave(el, done)
    }
  }
}
</script>
