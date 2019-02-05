<template lang="pug">
  div(v-bind:class="['Presentation', `Presentation--${color}`]")
    .Presentation-portrait
      img.Presentation-photo(src="../assets/images/Home/Gaetan.png" alt="Gaëtan Lefebvre")
      img.Presentation-shape(:src="getImage(shape)" v-bind:alt="shape")
      img.Presentation-cropped(src="../assets/images/Home/Gaetan-cropped.png" alt="Gaëtan Lefebvre")
    aside.Presentation-data
      .Presentation-description
        h1.Presentation-title
          span.Presentation-above {{ above }}
          span.Presentation-name
            span.Presentation-first {{ first }}&nbsp;
            span(v-bind:class="['Presentation-last', `Presentation-last--${color}`]") {{ last }}
        p.Presentation-text(v-for="text in texts") {{ text }}
      .Presentation-push(v-if="type === 'home'")
        span.Presentation-heavy Push&nbsp;
        span.Presentation-thin the&nbsp;
        span.Presentation-thin to continue
    ul.Presentation-links(v-if="type === 'about'")
      li.Presentation-link
        a(href="#" title="LinkedIn") LinkedIn
      li.Presentation-link
        a(href="#" title="Twitter") Twitter
      li.Presentation-link
        a(href="#" title="Behance") Behance
      li.Presentation-link
        a(href="#" title="Instagram") Instagram
</template>

<script>
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
  methods: {
    getImage(image) {
      const images = require.context('../assets/images/Home', false, /\.png$/)
      return images(`./${image}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Presentation {
  position: relative;
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

    @media (max-width: #{grid-media(12)}) {
      width : grid(5);
    }

    @media (max-width: #{grid-media(10)}) {
      width : grid(4);
    }

    @media (max-width: #{grid-media(8)}) {
      width : grid(2);
      order: 2;
    }

    @media (max-width: #{grid-media(6)}) {
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

    @media (max-width: #{grid-media(6)}) {
      width : 100%;
    }
  }

  &-description {
    margin-bottom: $margin-n;
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
    text-transform: uppercase;

    @media (max-height: #{grid-media(5)}) {
      display: none;
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
    position: absolute;
    right: 0;
    bottom: $margin-s;

    @media (max-width: #{grid-media(8)}) {
      right: auto;
      left: 0;
    }

    @media (max-width: #{grid-media(6)}) {
      display: none;
    }
  }

  &-link {
    margin-left: $margin-t;
    font-size: 1.6rem;
    font-weight: 300;
    text-transform: uppercase;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
