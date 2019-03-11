<template lang="pug">
footer.Footer
  .Footer-container
    nuxt-link.Footer-navigation(:to="{ name: 'projects-' + to }" v-bind:title="title")
      img.Footer-image(:src="require(`../assets/images/Menu/${to}.png`)" v-bind:alt="title")
      span.Footer-title {{ title }}
      .Footer-link.Push.Push--light.Push--right
        .Footer-arrow.Push-arrow
        .Footer-arrow.Push-arrow
</template>

<script>
export default {
  props: [
    'to',
    'title'
  ],
  mounted() {
    const _footerContainer = this.$el.querySelector('.Footer-container')
    let isEntered = false

    const whichTransitionEvent = () => {
      let t
      const el = document.createElement('fakeelement')
      const transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      }

      for (t in transitions) if (el.style[t] !== undefined) return transitions[t]
    }

    _footerContainer.addEventListener('mouseover', () => {
      isEntered = true
      const transitionEvent = whichTransitionEvent()
        transitionEvent && _footerContainer.addEventListener(transitionEvent, () => {
        if (isEntered) {
          window.scroll({
            top : document.documentElement.scrollHeight,
            left : 0,
            behavior : 'smooth'
          })
        }
      })
    })

    _footerContainer.addEventListener('mouseleave', () => {
      isEntered = false
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';
@import '~assets/styles/tools/mixins';

.Footer {
  $rootFooter: &;
  $height-size: 25rem;
  $line-size: $margin-b;
  $link-size: 4.4rem;
  $scale-size: 5rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: $line-size;
  background-color: $black;
  border-bottom: .1rem solid $dark;
  user-select: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    height: $line-size;
    transition: all $easing-duration;
  }

  &::before {
    left: 0;
    width: 100%;
    background-color: $white;
  }

  &::after {
    left: 50%;
    width: .1rem;
    background-color: $grey;
  }

  &-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: $height-size;
    overflow: hidden;
    transition: all $easing-duration;

    &:hover {
      height: $height-size + $scale-size;
    }
  }

  &-navigation {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: grid(10);
    height: 100%;

    @include grid-scale(10);

    &:hover {
      > * {
        opacity: 1;
      }

      #{$rootFooter}-image {
        filter: none;
      }

      #{$rootFooter}-arrow {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &-title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 7rem;
    font-weight: 700;
    letter-spacing: .125em;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: .4;
    transform: translate(-50%, -50%);
    transition: opacity $easing-duration;
    will-change: opacity;

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

  &-link {
    position: absolute;
    top: calc(50% - #{$link-size} / 2);
    right: 0;

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }
}
</style>
