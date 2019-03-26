<template lang="pug">
.Glitch
  img.Glitch-original(v-bind:class="!isGlitching ? 'is-active' : ''" v-lazy="require(`~/${path}${image.src}.png`)"  :alt="capitalizeFirstLetter(image.alt)" draggable="false")
  img.Glitch-effect(v-bind:class="isGlitching ? 'is-active' : ''" :src="require(`../${path}${src}.png`)"  :alt="capitalizeFirstLetter(alt)" draggable="false")
</template>

<script>
export default {
  data() {
    return {
      isGlitching: false,
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
        this.isGlitching = true
        this.src = `${this.image.src}/${this.image.src}_${this.number}`
        this.alt = `${this.image.src} glitch`
        ++this.number
        setTimeout(() => {
          this.glitchPeriodic()
        }, this.frequency)
      } else {
        this.isGlitching = false
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

<style lang="scss" scoped>
.Glitch {
  &-original,
  &-effect {
    display: none;
    width: 100%;
    height: auto;

    &.is-active {
      display: block;
    }
  }
}
</style>
