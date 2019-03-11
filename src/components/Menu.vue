<template lang="pug">
.Menu
  router-link.Menu-link(:to="{ name: 'pocketcare' }")
    img.Menu-image(src="../assets/images/Menu/pocketcare.png" alt="Pocketcare")
    span.Menu-title Pocketcare
  router-link.Menu-link(:to="{ name: 'tesla' }")
    img.Menu-image(src="../assets/images/Menu/tesla.png" alt="Tesla")
    span.Menu-title Tesla
  span.Menu-float.Cursor-frame--menu
    a.Menu-back.Cursor-frame--menu(@click="toggleMenu")
      .Menu-cross.Cursor-frame--menu
  router-link.Menu-link(:to="{ name: 'buddy-buddy' }")
    img.Menu-image(src="../assets/images/Menu/buddy-buddy.png" alt="Buddy Buddy")
    span.Menu-title Buddy Buddy
  span.Menu-link.Menu-link--forbidden
    img.Menu-image(src="../assets/images/Menu/personal.png" alt="Personal")
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

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

  &-link {
    position: relative;
    flex: 1 0 20%;
    border-top: .1rem solid $dark;
    border-bottom: .1rem solid $dark;
    transition: flex $easing-duration;
    overflow: hidden;

    &:hover {
      flex-basis: $item-percentage * 1%;

      #{$rootMenu}-image {
        filter: none;
      }
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
  }

  &-float {
    position: relative;
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
