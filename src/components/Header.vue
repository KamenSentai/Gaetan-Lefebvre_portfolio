<template lang="pug">
  header.Header
    .Header-topbar
      router-link(to="home")
        Logo(:color="color")
      ul.Header-navbar
        li.Header-item
          router-link(:to="{ name: 'projects' }") Projects
        li.Header-item
          router-link(:to="{ name: 'about' }") About
        li.Header-item
          router-link(:to="{ name: 'contact' }") Contact
    .Header-jumbotron
</template>

<script>
import Logo from './Logo'

export default {
  props: [
    'color'
  ],
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/functions';

.Header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: $white;
  background-color: $black;

  &-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: grid(12);
    margin-top: $margin-s;
  }

  &-navbar {
    display: flex;
    flex-direction: row;
  }

  &-item {
    font-size: 1.8rem;
    margin-right: $margin-s;
    font-weight: 700;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
