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
    name: 'csdc',
    mode: 'out-in',
    enter(el, done) {
      // console.log('enter', this.$route.params)
      done()
    },
    leave(el, done) {
      if (this.$route.name.includes('projects') && !this.$route.params.from) {
        const _containerCarousel = this.$el.querySelector('.Carousel-container')
        if (_containerCarousel) _containerCarousel.classList.add('Carousel-container--case')

        setTimeout(() => {
          done()
        }, 1000)
      } else {
        done()
      }
    }
  }
}
</script>
