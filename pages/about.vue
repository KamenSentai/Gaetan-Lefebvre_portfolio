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
import AboutController from '~/assets/scripts/AboutController'

export default {
  head() {
    return {
      title: 'Gaëtan LEFEBVRE | About myself',
      meta: [
        { hid: 'description', name: 'description', content: 'I’m a passionate person and have many hobbies like music, cooking, friends and my family. I also work on projects to improve my skills in design.' }
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
        about: {
          pages: [
            {
              color: "green",
              shape: "circle",
              above: "Who",
              first: "I trully",
              last: "am ?",
              paragraphs: [
                "Before I became a design student, I was first and foremost a passionate person. All I have done has been made with a 100% of my energy. I am a trustworthy, voluntary and above all a reliable person.",
                "I'm looking for learning opportunity. It is in the coming years that I hope to become the person that i wish to be."
              ]
            }, {
              color: "blue",
              shape: "triangle",
              above: "What",
              first: "I really",
              last: "like ?",
              paragraphs: [
                "Sport also animates my days and allows me to let off steam. I also like to cook, for myself, my friends and my family. I'm a big music fan.",
                "I still like to draw. Maybe that's what led me to my current path. Finally, cultural outings are activities I would never refuse you!"
              ]
            }, {
              color: "red",
              shape: "square",
              above: "Where",
              first: "I actually",
              last: "work ?",
              paragraphs: [
                "I recently did an internship at <a class=\"Text--hovered Text--bold Cursor-frame--reduced\" href=\"http://buddybuddy.io/\" target=\"_blank\" rel=\"noopener\" title=\"Buddy Buddy\">Buddy Buddy</a> as a UX / UI designer. I also worked for several clients such as SEL, “Action contre la Faim”, OpSiSe,” La Voix de l'Enfant” or Candriam.",
                "I am currently working on the redesign of the Manucurist website and I am doing other freelance work in Paris. I am also writing a thesis for my 4th year at HETIC about motion design."
              ]
            }, {
              color: "yellow",
              shape: "pentagone",
              above: "What",
              first: "to do",
              last: "now ?",
              paragraphs: [
                "I am looking for a 6-month internship for my 4th year at HETIC. Feel free to <a class=\"Text--hovered Text--bold Cursor-frame--reduced\" href=\"mailto:gaetan.lefebvre@hetic.net\" title=\"gaetan.lefebvre@hetic.net\">contact</a> me to discuss or to have a drink. If you have a project, I am also here for you.",
                "<span class=\"Text--dark\">©2019 - Gaëtan Lefebvre<br/>Coded by</span> <a class=\"Text--hovered Text--bold Cursor-frame--reduced\" href=\"https://www.alain-caovantruong.fr/\" target=\"_blank\" rel=\"noopener\" title=\"Alain Cao Van Truong\">Alain Cao Van Truong</a>"
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
    name: 'about',
    mode: 'out-in',
    enter(el, done) {
      new AboutController().enter(el, done)
    },
    leave(el, done) {
      new AboutController().leave(el, done)
    }
  }
}
</script>
