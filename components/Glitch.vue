<template lang="pug">
img.Glitch(:src="require(`../${path}${src}.png`)"  :alt="alt" draggable="false")
</template>

<script>
export default {
  data() {
    return {
      number: 0,
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
    glitchImage() {
      if (this.number < 20) {
        this.src = `${this.image}/${this.image}_${this.number}`
        ++this.number
        setTimeout(() => {
          this.glitchImage()
        }, 50)
      } else {
        this.src = this.image
        this.number = 0
      }
    }
  },
  mounted() {
    setInterval(() => {
      if (this.isAutomatic) {
        this.glitchImage()
      }
    }, 5000)
  }
}
</script>
