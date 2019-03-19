<template lang="pug">
img.Glitch(:src="require(`../${path}${src}.png`)"  :alt="alt" draggable="false")
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      total: 10,
      src: '',
      isPeriodic: false
    }
  },
  props: [
    'path',
    'image',
    'alt',
    'isAutomatic',
    'isPlaying'
  ],
  created() {
    this.src = this.image
  },
  methods: {
    glitchPeriodic() {
      if (!this.isPlaying) {
        this.isPeriodic = true
        if (this.number < this.total) {
          this.src = `${this.image}/${this.image}_${this.number}`
          ++this.number
          setTimeout(() => {
            this.glitchPeriodic()
          }, 50)
        } else {
          this.isPeriodic = false
          this.src = this.image
          this.number = 0
        }
      } else {
          this.isPeriodic = false
      }
    },
    glitchFocused() {
      if (this.isPlaying) {
        if (this.number < this.total) {
          this.src = `${this.image}/${this.image}_${this.number}`
          ++this.number
          setTimeout(() => {
            this.glitchFocused()
          }, 50)
        } else {
          this.number = 0
          this.glitchFocused()
        }
      } else {
        this.src = this.image
        this.number = 0
      }
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
      setInterval(() => {
        if (this.isAutomatic) this.glitchPeriodic()
      }, 4000)
      this.$watch(
        () => this.isPlaying,
        value => { if (this.isPlaying) this.glitchFocused() }
      )
    }
  }
}
</script>
