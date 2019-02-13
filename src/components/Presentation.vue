<template lang="pug">
  div.Presentation(v-bind:class="`Presentation--${color}`")
    .Presentation-portrait(v-if="type === 'home'")
      img.Presentation-photo(src="../assets/images/Home/Gaetan.png" alt="Gaëtan Lefebvre")
      img.Presentation-shape(:src="getImage(shape, type)" v-bind:alt="shape")
      img.Presentation-cropped(src="../assets/images/Home/Gaetan-cropped.png" alt="Gaëtan Lefebvre")
    .Presentation-portrait.Presentation-portrait--picture(v-if="type === 'about'")
      img.Presentation-shape(:src="getImage(shape, type)" v-bind:alt="shape")
    aside.Presentation-data
      .Presentation-description
        h1.Presentation-title
          span.Presentation-above {{ above }}
          span.Presentation-name
            span.Presentation-first {{ first }}&nbsp;
            span.Presentation-last(v-bind:class="`Presentation-last--${color}`") {{ last }}
        p.Presentation-text(v-for="text in texts") {{ text }}
      .Presentation-push(v-if="type === 'home'")
        span.Presentation-heavy Push&nbsp;
        span.Presentation-thin the&nbsp;
        Icon(:shape="shape")
        span.Presentation-thin &nbsp;to continue
      ul.Presentation-links(v-else-if="type === 'about'")
        li.Presentation-link
          a(href="#" title="LinkedIn") LinkedIn
        li.Presentation-link
          a(href="#" title="Twitter") Twitter
        li.Presentation-link
          a(href="#" title="Instagram") Instagram
</template>

<script>
import Icon from './Icon'

export default {
  props: [
    'type',
    'color',
    'shape',
    'above',
    'first',
    'last',
    'texts'
  ],
  components: {
    Icon
  },
  methods: {
    getImage(image, folder) {
      let images
      switch (folder) {
        case 'home':
          images = require.context('../assets/images/Home', false, /\.png$/)
          break
        case 'about':
          images = require.context('../assets/images/About', false, /\.png$/)
          break
      }
      return images(`./${image}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Presentation {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: $margin-t;

  @each $key, $value in $colors {
    &--#{$key} {
      *::selection {
        color: $white;
        background-color: $value;
      }
    }
  }

  &-portrait {
    position: relative;
    width: grid(7);
    overflow: hidden;
    user-select: none;
    transform: translateX(-#{grid(1)});

    &--picture {
      width: grid(6);
      transform: none;
    }

    @media (max-width: #{grid-media(12)}) {
      width : grid(5);
      transform: translateX(-#{grid(.5)});
    }

    @media (max-width: #{grid-media(10)}) {
      width : grid(4);
    }

    @media (max-width: #{grid-media(8)}) {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: $margin-s;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), $black);

      @media (max-width: #{grid-media(8)}) {
        display: none;
      }
    }
  }

  &-photo,
  &-cropped,
  &-shape {
    width: 100%;
    height: auto;
  }

  &-cropped,
  &-shape {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &-data {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: grid(5);

    @media (max-width: #{grid-media(12)}) {
      width : grid(5);
    }

    @media (max-width: #{grid-media(10)}) {
      width : grid(4);
    }

    @media (max-width: #{grid-media(8)}) {
      width : 100%;
    }
  }

  &-description {
    margin-bottom: $margin-s;
  }

  &-title {
    display: flex;
    flex-direction: column;
    margin-bottom: $margin-t;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: .075em;
    line-height: 1.125em;

    @media (max-width: #{grid-media(10)}) {
      font-size: 3.6rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 2.8rem;
    }
  }

  &-above {
    color: $dark;
  }

  &-first {
    color: $white;
  }

  &-last {
    @each $key, $value in $colors {
      &--#{$key} {
        color: $value;
      }
    }
  }

  &-text {
    margin-bottom: $margin-t;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.75em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-push {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    font-size: 1.6rem;
    letter-spacing: .25em;
    text-transform: uppercase;
    user-select: none;

    @media (max-width: #{grid-media(4)}) {
      font-size: 1.4rem;
      justify-content: space-between;
    }
  }

  &-heavy {
    font-weight: 700;
  }

  &-thin {
    font-weight: 300;
  }

  &-links {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: $margin-s;
    letter-spacing: .125em;

    @media (max-width: #{grid-media(8)}) {
      width: grid(6);
    }

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }

  &-link {
    margin-right: $margin-t;
    font-size: 1.6rem;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.75em;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
