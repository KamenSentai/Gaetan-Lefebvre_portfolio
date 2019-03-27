<template lang="pug">
img.Glitch(:src="require(`../${path}${src}.png`)" v-lazy="require(`../${path}${src}.png`)"  :alt="capitalizeFirstLetter(alt)" draggable="false")
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      total: 10,
      frequency: 75,
      src: '',
      alt: ''
    }
  },

  created() {
    this.src = this.image.src
    this.alt = this.image.alt
  },

  props: [
    'path',
    'image',
    'isPlaying'
  ],

  methods: {
    glitchPeriodic() {
      if (this.number < this.total) {
        this.src = `${this.image.src}/${this.image.src}_${this.number}`
        this.alt = `${this.image.src} glitch`
        ++this.number
        setTimeout(() => {
          this.glitchPeriodic()
        }, this.frequency)
      } else {
        this.src = this.image.src
        this.alt = this.image.alt
        this.number = 0
      }
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },

  mounted() {
    if (
      !(navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i))
    ) {
      const currentRoute = this.$route.name

      const allowGlitch = () => {
        if (this.$route.name === currentRoute) {
          if (this.isPlaying) this.glitchPeriodic()
          setTimeout(allowGlitch, 4000)
        }
      }

      if (!this.$route.name.includes('projects-')) setTimeout(allowGlitch, 4000)
    }
  }
}
</script>
