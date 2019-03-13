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

import { TweenLite } from 'gsap'

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
      document.body.style.pointerEvents = 'none'
      TweenLite.fromTo('.Carousel-container', 1, { scaleX: 0, left: - window.innerWidth / 2 }, { scaleX: 1, left: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-button', 1, { scale: 0 }, { scale: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-layer--back', 1, { opacity: 0 }, { opacity: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-neon', 1, { scale: 0 }, { scale: 1, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-layer--front', 1, { opacity: 0 }, { opacity: 1, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Header-navbar', 1, { opacity: 0 }, { opacity: 1, delay: 2.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-lock', 1, { opacity: 0 }, { opacity: .25, delay: 2.5, ease: Power2.easeInOut, onComplete: () => {
        document.body.style.pointerEvents = 'auto'
        done()
      }})
    },
    leave(el, done) {
      document.body.style.pointerEvents = 'none'
      if (this.$route.name.includes('projects-')) {
        this.$el.querySelector('.Carousel-container').classList.add('Carousel-container--case')
        TweenLite.fromTo('.Header-item:first-child', 1, { opacity: 1 }, { opacity: 0, ease: Power2.easeInOut })

        setTimeout(() => {
          document.body.style.pointerEvents = 'auto'
          done()
        }, 1000)
      } else if (this.$route.name == 'index' || this.$route.name == 'about') {
        const _labelsCarousel = Array.from(el.querySelectorAll('.Carousel-label'))
        const _extrasCarousel = Array.from(el.querySelectorAll('.Carousel-extra'))
        for (const _extraCarousel of _extrasCarousel) _extraCarousel.classList.add('is-hidden')
        TweenLite.to('.Carousel-progress', 0, { opacity: 0, y: 30, ease: Power2.easeInOut})
        TweenLite.to('.Header-navbar', 0, { opacity: 0, ease: Power2.easeInOut })
        TweenLite.to('.Carousel-extra', 0, { opacity: 0, delay: 0, ease: Power2.easeInOut })
        TweenLite.to('.Carousel-lock', 0, { opacity: 0, delay: 0, ease: Power2.easeInOut })

        setTimeout(() => {
          for (const _labelCarousel of _labelsCarousel) _labelCarousel.classList.add('is-hidden')
          TweenLite.to('.Carousel-layer--front', 1, { opacity: 0, delay: .5, ease: Power2.easeInOut })
          TweenLite.to('.Carousel-neon', 1, { scale: 0, delay: .5, ease: Power2.easeInOut })
          TweenLite.to('.Carousel-layer--back', 1, { opacity: 0, delay: 1, ease: Power2.easeInOut })
          TweenLite.to('.Carousel-button', 1, { scale: 0, delay: 1.5, ease: Power2.easeInOut })
          TweenLite.to('.Carousel-container', 1, { scaleX: 0, left: - window.innerWidth / 2, delay: 2, ease: Power2.easeInOut, onComplete: () => {
            document.body.style.pointerEvents = 'auto'
            done()
          }})
        }, 500)
      } else {
        document.body.style.pointerEvents = 'auto'
        done()
      }
    }
  }
}
</script>
