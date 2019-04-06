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
import IndexController from '~/assets/scripts/IndexController'

export default {
  head() {
    return {
      title: 'Gaëtan LEFEBVRE | Interactive Designer & Motion Designer',
      meta: [
        { hid: 'description', name: 'description', content: 'Hello all! I\'m Gaetan Lefebvre and I\'m an Interactive Designer. Today, I\'m a 4th year student at HETIC and I\'m passionnante about interactive and motion design.' }
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
        home: {
          pages: [
            {
              above: "Hi, I'm",
              first: "Gaëtan",
              last: "Lefebvre",
              paragraphs: [
                "Passionate about interactive design and motion design, I am currently a 4th year student at <a class=\"Text--hovered Text--bold Cursor-frame--reduced\" href=\"https://www.hetic.net/\" target=\"_blank\" rel=\"noopener\" title=\"Hetic\">HETIC</a>.",
                "I was recently a junior UX/UI designer at BuddyBuddy. Now I'm looking for an internship as an <span class=\"Text--bold\">interactive designer</span>."
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
  },

  transition: {
    name: 'index',
    mode: 'out-in',
    enter(el, done) {
      new IndexController(this).enter(el, done)
    },
    leave(el, done) {
      new IndexController().leave(el, done)
    }
  }
}
</script>
