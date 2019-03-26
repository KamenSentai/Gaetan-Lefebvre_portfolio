<template lang="pug">
.Default
  Mouse
  nuxt(ref="page")
  Loading(v-if="!isLoaded" :roundedPercentage="roundedPercentage" ref="loading")
</template>

<script>
import Mouse from '~/components/Mouse'
import Loading from '~/components/Loading'

export default {
  data() {
    return {
      x: 0,
      y: 0,
      roundedPercentage: 0,
      isLoaded: false,
      date: null,
      step: 1
    }
  },
  created() {
    this.date = new Date()
  },
  components: {
    Mouse,
    Loading
  },
  methods: {
    onComplete() {
      setTimeout(() => {
        if (this.$refs.loading) this.$refs.loading.$el.classList.add('is-hidden')
        if (this.$refs.page.$route.name !== null && this.$refs.page.$route.name.includes('projects-')) {
          document.body.classList.add('is-active')
          this.$refs.page.$el.querySelector('.Header').style.opacity = '1'
          this.$refs.page.$el.querySelector('.Page').style.opacity = '1'
          this.$refs.page.$el.querySelector('.Footer').style.opacity = '1'
        }
        setTimeout(() => {
          this.isLoaded = true
        }, 1500)
      }, 1500)
    }
  },
  mounted() {
    if (this.$refs.page.$route.name === null) this.isLoaded = true
    else if (this.$refs.page.$route.name.includes('projects-')) {
      this.$refs.page.$el.querySelector('.Header').classList.add('is-inactive')
      this.$refs.page.$el.querySelector('.Header').style.opacity = '0'
      this.$refs.page.$el.querySelector('.Page').style.opacity = '0'
      this.$refs.page.$el.querySelector('.Footer').style.opacity = '0'
    }

    const delay = 1000

    setTimeout(() => {
      this.roundedPercentage = 25
      setTimeout(() => {
        this.roundedPercentage = 50
        setTimeout(() => {
          this.roundedPercentage = 75
          setTimeout(() => {
            this.roundedPercentage = 100
            this.onComplete()
          }, delay)
        }, delay)
      }, delay)
    }, delay)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/mixins';

.Default {
  @include full-size();
}
</style>
