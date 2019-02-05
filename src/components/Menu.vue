<template lang="pug">
  div.Menu
    router-link.Menu-link(:to="{ name: 'pocketcare' }")
      img.Menu-image(src="../assets/images/Menu/pocketcare.png" alt="Pocketcare")
      span.Menu-title Pocketcare
    router-link.Menu-link(:to="{ name: 'tesla' }")
      img.Menu-image(src="../assets/images/Menu/tesla.png" alt="Tesla")
      span.Menu-title Tesla
    span.Menu-float
      a.Menu-back(@click="$router.go(-1)")
        .Menu-cross
    router-link.Menu-link(:to="{ name: 'buddy-buddy' }")
      img.Menu-image(src="../assets/images/Menu/buddy-buddy.png" alt="Buddy Buddy")
      span.Menu-title Buddy Buddy
    router-link.Menu-link(:to="{ name: 'personal' }")
      img.Menu-image(src="../assets/images/Menu/personal.png" alt="Personal")
      span.Menu-title Personal
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Menu {
  $rootMenu: &;
  $item-percentage: 30;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
  user-select: none;

  &-link {
    position: relative;
    flex: 1 0 20%;
    border-top: .1rem solid $dark;
    border-bottom: .1rem solid $dark;
    transition: flex .5s ease-in-out;
    overflow: hidden;

    &:hover {
      flex-basis: $item-percentage * 1%;

      > * {
        opacity: 1;
      }

      #{$rootMenu}-image {
        filter: none;
      }
    }

    > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: .4;
      transition: opacity .5s ease-in-out;
      will-change: opacity;
    }
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
    transition: opacity .5s ease-in-out;
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
  }

  &-image {
    width: auto;
    height: $item-percentage * 1vh;
    filter: grayscale(100%);
    transition: all .5s ease-in-out;
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
