<template lang="pug">
Header(
  :index="data.colors.indexOf(color) || data.colors.indexOf(shape)"
  :hasProject="false"
  :hasAbout="false"
  :hasHome="true"
  jumbotron="hero"
  type="about"
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
        about: {
          pages: [
            {
              color: "green",
              shape: "circle",
              above: "Who",
              first: "am I",
              last: "really ?",
              paragraphs: [
                "Before being a student in design study, I am first and foremost a passionate person. Everything I do is done 100% with a lot of energy and good humor. I am a person of trust, voluntary and above all reliable.",
                "I am in the quest for learning. It is during these future years that I hope I can become the person I wish to be."
              ]
            }, {
              color: "blue",
              shape: "triangle",
              above: "What",
              first: "I trully",
              last: "like ?",
              paragraphs: [
                "The sport also animates my days and allows me to let off steam. I also love to cook, for me, my friends, my family. I am a big fan of music. A day without is not a real day.",
                "I always love to draw. Maybe that's what led me to my current path. Finally, cultural outings are activities that I would never refuse you!"
              ]
            }, {
              color: "red",
              shape: "square",
              above: "Where",
              first: "I actually",
              last: "work ?",
              paragraphs: [
                "I recently did an internship at @Buddy Buddy as a UX / UI designer. I have also worked for several clients such as SEL, Action contre la Faim, OpSiSe, La Voix de L’Enfant, Immersive Robotics.",
                "I am currently working on the redesign of the Manucurist site and perform other freelance missions in Paris. I also realize a memoir for my 4th year at HETIC."
              ]
            }, {
              color: "yellow",
              shape: "pentagone",
              above: "What",
              first: "to do",
              last: "now ?",
              paragraphs: [
                "I am looking for an internship of 6 months for my 4th year at HETIC. Do not hesitate to contact me to discuss or to have a drink. If you have a project, I am also present :)"
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
      TweenLite.fromTo('.Hero-shape', 1, { width: 0 }, { width: '100%', delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-backs', 1, { opacity: 0 }, { opacity: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-fronts', 1, { opacity: 0 }, { opacity: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-description', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1.5, ease: Power2.easeInOut})
      TweenLite.fromTo('.Hero-texts', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 2, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-links', 1, { opacity: 0, x: -30 }, { opacity: 1, x: 0, delay: 2.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-scroll', 1, { opacity: 0 }, { opacity: 1, delay: 2.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Header-navbar', 1, { opacity: 0 }, { opacity: 1, delay: 2.5, ease: Power2.easeInOut, onComplete: () => {
        document.body.style.pointerEvents = 'auto'
        done()
      }})
    },
    leave(el, done) {
      document.body.style.pointerEvents = 'none'
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }
}
</script>
