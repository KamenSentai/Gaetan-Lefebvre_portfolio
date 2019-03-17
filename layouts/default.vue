<template lang="pug">
  div
    Mouse
    nuxt
</template>

<script>
import Mouse from '~/components/Mouse'

export default {
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  components: {
    Mouse
  },
  mounted() {
  }
}
</script>
