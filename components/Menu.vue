<template lang="pug">
.Menu
  span.Menu-link(ref="pocketcare" v-on:click="clickProject($event)" data-range="0")
    nuxt-link.Menu-button(:to="{ name: 'projects-pocketcare', params: { from: $route.name + '/menu' } }" )
    img.Menu-image(src="~static/images/Menu/pocketcare.png" alt="Pocketcare")
    span.Menu-title Pocketcare
  span.Menu-link(ref="tesla" v-on:click="clickProject($event)" data-range="1")
    nuxt-link.Menu-button(:to="{ name: 'projects-tesla', params: { from: $route.name + '/menu' } }" )
    img.Menu-image(src="~static/images/Menu/tesla.png" alt="Tesla")
    span.Menu-title Tesla
  span.Menu-float.Cursor-frame--menu(ref="float")
    a.Menu-back.Cursor-frame--menu(ref="back" @click="toggleMenu")
      .Menu-cross.Cursor-frame--menu
  span.Menu-link(ref="buddybuddy" v-on:click="clickProject($event)" data-range="2")
    nuxt-link.Menu-button(:to="{ name: 'projects-buddy-buddy', params: { from: $route.name + '/menu' } }" )
    img.Menu-image(src="~static/images/Menu/buddy-buddy.png" alt="Buddy Buddy")
    span.Menu-title Buddy Buddy
  span.Menu-link.Menu-link--forbidden(ref="personal" data-range="4")
    img.Menu-image(src="~static/images/Menu/personal.png" alt="Personal")
    Lock.Menu-lock
    span.Menu-title Coming soon
</template>

<script>
import Lock from './Lock'

export default {
  components: {
    Lock
  },
  methods: {
    toggleMenu: function() {
      document.body.style.overflow = 'auto'
      this.$el.classList.add('is-locked')
      this.$el.classList.remove('is-loaded')
      this.$el.classList.remove('is-loading')

      setTimeout(() => {
        this.$el.classList.remove('is-active')
        this.$el.classList.remove('is-locked')
      }, 1000)
    },
    clickProject: function (event) {
      let target = event.target
      if (this.$refs.pocketcare !== target) this.$refs.pocketcare.classList.add('is-hidden')
      if (this.$refs.tesla !== target) this.$refs.tesla.classList.add('is-hidden')
      if (this.$refs.buddybuddy !== target) this.$refs.buddybuddy.classList.add('is-hidden')
      if (this.$refs.personal !== target) this.$refs.personal.classList.add('is-hidden')
      target.classList.add('is-active')
      this.$refs.float.classList.add('is-hidden')
      document.body.style.pointerEvents = 'none'
      setTimeout(() => {
        this.$el.classList.add('is-disappearing')
        document.body.style.overflow = ''
        setTimeout(() => {
          const _buttonMenu = target.querySelector('.Menu-button')
          if (_buttonMenu) _buttonMenu.click()
        }, 1500)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Menu {
  $rootMenu: &;
  $item-percentage: 40;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 5000;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: $black;
  transition: opacity $easing-duration;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  will-change: opacity;

  &.is-locked {
    pointer-events: none;
  }

  &.is-active {
    display: flex;
  }

  &.is-loading {
    opacity: 1;

    #{$rootMenu}-link {
      &:hover {
        #{$rootMenu}-image,
        #{$rootMenu}-title {
          opacity: 1;
        }
      }

      &:nth-child(1) {
        #{$rootMenu}-image,
        #{$rootMenu}-title {
          transition-delay: 0s;
        }
      }

      &:nth-child(2) {
        #{$rootMenu}-image,
        #{$rootMenu}-title {
          transition-delay: .25s;
        }
      }

      &:nth-child(4) {
        #{$rootMenu}-image,
        #{$rootMenu}-title {
          transition-delay: .5s;
        }
      }

      &:nth-child(5) {
        #{$rootMenu}-image,
        #{$rootMenu}-title,
        #{$rootMenu}-lock {
          transition-delay: .75s;
        }
      }

      #{$rootMenu}-image,
      #{$rootMenu}-title {
        opacity: .5;
      }

      #{$rootMenu}-lock {
        opacity: .25;
      }

    }

    #{$rootMenu}-back {
      transition-delay: 1s;
      transform: translateX(0);
    }
  }

  &.is-loaded {
    #{$rootMenu}-image,
    #{$rootMenu}-title,
    #{$rootMenu}-lock {
      transition-delay: 0s !important;
    }
  }

  &.is-disappearing {
    opacity: 0 !important;
  }

  &-link {
    position: relative;
    flex: 1 0 20%;
    border-top: .1rem solid $dark;
    border-bottom: .1rem solid $dark;
    transition: flex $easing-duration, border-color $easing-duration;
    overflow: hidden;

    &:hover {
      flex-basis: $item-percentage * 1%;

      #{$rootMenu}-image {
        filter: none;
      }
    }

    &.is-hidden {
      flex: 0 0 0;
      border-color: rgba($dark, 0);
    }

    &.is-active {
      border-color: rgba($dark, 0);
    }

    &--forbidden {
      transition: flex $easing-duration, filter $easing-duration;
      cursor: pointer;

      &:hover {
        filter: grayscale(100%);

        #{$rootMenu}-lock {
          opacity: .5;
        }
      }
    }

    > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: .5;
      transition: opacity $easing-duration;
      will-change: opacity;
    }
  }

  &-lock {
    width: auto;
    height: 12.5vh;
    opacity: 0;
    pointer-events: none;
  }

  &-float {
    position: relative;
    z-index: 1;
    transition: transform $easing-duration;

    &.is-hidden {
      transform: translateX(50%);
    }
  }

  &-back {
    position: absolute;
    top: - $back-menu-l / 2;
    right: - $back-menu-l / 2;
    z-index: 1;
    width: $back-menu-l;
    height: $back-menu-l;
    background-color: $black;
    border: .1rem solid $dark;
    border-radius: 100%;
    transition: transform $easing-duration;
    transform: translateX(100%);
    will-change: transform;

    @media (max-height: #{grid-media(6)}) {
      top: - $back-menu-m / 2;
      right: - $back-menu-m / 2;
      width: $back-menu-m;
      height: $back-menu-m;
    }

    @media (max-height: #{grid-media(4)}) {
      top: - $back-menu-s / 2;
      right: - $back-menu-s / 2;
      width: $back-menu-s;
      height: $back-menu-s;
    }

    &:hover {
      #{$rootMenu}-cross {
        opacity: 1;
      }
    }
  }

  &-cross {
    $line-size: 1.75rem;

    position: absolute;
    top: 50%;
    left: calc(50% - #{$line-size});
    opacity: .4;
    transition: opacity $easing-duration;
    will-change: opacity;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: - $line-size;
      left: -.1rem;
      z-index: 1;
      width: .2rem;
      height: $line-size * 2;
      background-color: $white;
      transform-origin: 50% 50%;
    }

    &::before {
      transform: rotateZ(45deg);
    }

    &::after {
      transform: rotateZ(-45deg);
    }

    @media (max-height: #{grid-media(6)}) {
      left: calc(50% - #{$line-size} * .75);

      &::before,
      &::after {
        top: - $line-size * .75;
        height: $line-size * 2 * .75;
      }
    }

    @media (max-height: #{grid-media(4)}) {
      left: calc(50% - #{$line-size} * .5);

      &::before,
      &::after {
        top: - $line-size * .5;
        height: $line-size * 2 * .5;
      }
    }
  }

  &-image,
  &-title {
    opacity: 0;
    transition: all $easing-duration;
    will-change: opacity;
    pointer-events: none;
  }

  &-image {
    width: auto;
    height: $item-percentage * 1vh;
    filter: grayscale(100%);
  }

  &-title {
    font-size: 7rem;
    font-weight: 700;
    letter-spacing: .125em;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;

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
}
</style>
