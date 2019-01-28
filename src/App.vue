<template lang="pug">
  #app
    ul
      li <router-link to="/">/</router-link>
      li <router-link to="/about">/about</router-link>
      li <router-link to="/contact">/contact</router-link>
      li <router-link to="/projects">/projects</router-link>
      li <router-link to="/projects/pocketcare">/projects/pocketcare</router-link>
      li <router-link to="/projects/tesla">/projects/tesla</router-link>
      li <router-link to="/projects/buddy-buddy">/projects/buddy-buddy</router-link>
      li <router-link to="/projects/personal">/projects/personal</router-link>
    transition(name="Fade" mode="out-in")
      router-view
</template>

<script>
export default {
  metaInfo: {
    title: 'Gaëtan Lefebvre',
  }
}
</script>

<style lang="scss">
@import './styles/app';
</style>
