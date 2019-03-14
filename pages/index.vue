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
  },
  transition: {
    name: 'csdc',
    mode: 'out-in',
    enter(el, done) {
      document.body.style.pointerEvents = 'none'
      const _hero = el.querySelector('.Hero')
      if (_hero) {
        TweenLite.fromTo('.Hero-shape', 1, { scale: 0 }, { scale: 1, delay: 0, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-back', 1, { opacity: 0 }, { opacity: 1, delay: .5, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-front', 1, { opacity: 0 }, { opacity: 1, delay: .5, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-description', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-texts', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1.5, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-hold', 1, { opacity: 0, x: -30 }, { opacity: 1, x: 0, delay: 2, ease: Power2.easeInOut })
        TweenLite.fromTo('.Header-navbar', 1, { opacity: 0 }, { opacity: 1, delay: 2, ease: Power2.easeInOut, onComplete: () => {
          document.querySelector('.Hero-shape').style.transform = null
          document.body.style.pointerEvents = 'auto'
          done()
        }})
      } else {
        document.body.style.pointerEvents = 'auto'
        done()
      }
    },
    leave(el, done) {
      document.body.style.pointerEvents = 'none'
      const _hero = el.querySelector('.Hero')
      if (_hero) {
        TweenLite.fromTo('.Hero-shape', .5, { scale: 1 }, { scale: 0, delay: 0, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-back', .5, { opacity: 1 }, { opacity: 0, delay: .25, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-front', .5, { opacity: 1 }, { opacity: 0, delay: .25, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-description', 1, { opacity: 1, y: 0 }, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-texts', 1, { opacity: 1, y: 0 }, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
        TweenLite.fromTo('.Hero-hold', 1, { opacity: 1, x: 0 }, { opacity: 0, x: 30, delay: .5, ease: Power2.easeInOut })
        TweenLite.fromTo('.Header-navbar', .5, { opacity: 1 }, { opacity: 0, delay: 1, ease: Power2.easeInOut, onComplete: () => {
          document.body.style.pointerEvents = 'auto'
          done()
        }})
      } else {
        document.body.style.pointerEvents = 'auto'
        done()
      }
    }
  }
}
</script>
