<template lang="pug">
footer.Footer(:data-color="color")
  .Footer-container(ref="container")
    nuxt-link.Footer-navigation.Cursor-frame--text(:to="{ name: 'projects-' + to, params: { from: $route.name } }" v-bind:title="title")
      img.Footer-image.Cursor-frame--text(:src="require(`../assets/images/Menu/${to}.png`)" v-bind:alt="title")
      span.Footer-title.Cursor-frame--text {{ title }}
</template>

<script>
export default {
  props: [
    'to',
    'title',
    'color'
  ]
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';
@import '~assets/styles/tools/mixins';

.Footer {
  $rootFooter: &;
  $height-size: 25rem;
  $scale-size: 5rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: $black;
  border-bottom: .1rem solid $dark;
  user-select: none;

  &.is-active {
    pointer-events: none;

    #{$rootFooter}-container {
      &::before {
        transform: scale(1);
      }
    }

    #{$rootFooter}-navigation {
        #{$rootFooter}-image {
          opacity: 1;
          filter: none;
      }
    }

    #{$rootFooter}-title {
      opacity: .0;
      transform: translate(-50%, calc(-50% + #{$margin-t}));
    }
  }

  &-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: $height-size;
    background-color: $black;
    overflow: hidden;
    transition: all $easing-duration;

    &:hover {
      margin-top: - $scale-size;
      height: $height-size + $scale-size;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: calc(50% - .1rem);
      width: .2rem;
      height: 100vh;
      background-color: $darker;
      transform-origin: 50% 0;
      transform: scale(0);
      transition: transform $easing-duration;
      transition-delay: 2s;
    }
  }

  &-navigation {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: grid(10);
    height: 100%;
    transition: font-size $easing-duration;

    @include grid-scale(10);

    &:hover {
      #{$rootFooter}-image {
        opacity: 1;
        filter: none;
      }
    }
  }

  &-title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: .125em;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: .4;
    transform: translate(-50%, -50%);
    transition: all $easing-duration;

    @media (max-width: #{grid-media(10)}) {
      font-size: 6.2rem;
    }

    @media (max-width: #{grid-media(8)}) {
      font-size: 5.4rem;
    }

    @media (max-width: #{grid-media(6)}) {
      font-size: 4.6rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 3.8rem;
    }
  }

  &-image {
    width: auto;
    height: auto;
    max-height: 37.5rem;
    max-width: 100%;
    filter: grayscale(100%);
    opacity: .4;
    transition: all $easing-duration;
    will-change: opacity;
  }
}
</style>
