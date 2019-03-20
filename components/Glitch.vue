<template lang="pug">
img.Glitch(:src="require(`../${path}${src}.png`)"  :alt="alt" draggable="false")
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      total: 10,
      frequency: 75,
      src: ''
    }
  },
  props: [
    'path',
    'image',
    'alt',
    'isAutomatic'
  ],
  created() {
    this.src = this.image
  },
  methods: {
    glitchPeriodic() {
      if (this.number < this.total) {
        this.src = `${this.image}/${this.image}_${this.number}`
        ++this.number
        setTimeout(() => {
          this.glitchPeriodic()
        }, this.frequency)
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
    }
  }
}
</script>
