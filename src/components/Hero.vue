<template lang="pug">
.Hero(v-bind:class="`Hero--${data.colors[range]}`")
  .Hero-portrait(v-if="type === 'home'")
    img.Hero-back(
      src="../assets/images/Home/Gaetan.png"
      alt="Gaëtan Lefebvre"
      draggable="false"
    )
    img.Hero-shape(
      :src="getImage(data.shapes[range], type)"
      draggable="false"
    )
    img.Hero-front(
      src="../assets/images/Home/Gaetan-cropped.png"
      alt="Gaëtan Lefebvre"
      draggable="false"
    )
  .Hero-portrait.Hero-portrait--pictures(v-if="type === 'about'")
    img.Hero-front.Hero-front--slide(
      v-for="page in data[type].pages"
      :src="getImage(`${page.shape}_back`, type)"
      v-bind:class="checkIndex(page)"
      draggable="false"
    )
    img.Hero-shape.Hero-shape--slide(
      v-for="page in data[type].pages"
      :src="getImage(page.shape, type)"
      v-bind:class="checkIndex(page)"
      draggable="false"
    )
    img.Hero-back.Hero-back--slide(
      v-for="page in data[type].pages"
      :src="getImage(`${page.shape}_front`, type)"
      v-bind:class="checkIndex(page)"
      draggable="false"
    )
    span.Hero-scroll
  aside.Hero-data
    .Hero-description
      h1.Hero-title
        span.Hero-titles(v-for="page in data[type].pages" v-bind:class="checkIndex(page)")
          span.Hero-above {{ page.above }}
          span.Hero-name
            span.Hero-first {{ page.first }}&nbsp;
            span.Hero-last(v-bind:class="`Hero-last--${page.color || data.colors[range]}`") {{ page.last }}
      .Hero-texts
        .Hero-paragraphs(v-for="page in data[type].pages" v-bind:class="checkIndex(page)")
          p.Hero-paragraph(v-for="paragraph in page.paragraphs") {{ paragraph }}
    .Hero-push(v-if="type === 'home'")
      span.Hero-heavy Push&nbsp;
      span.Hero-thin the
      Icon(
        :color="data.colors[range]"
        :shape="data.shapes[range]"
      )
      span.Hero-thin to continue
    ul.Hero-links(v-else-if="type === 'about'")
      li.Hero-link
        a(href="#" title="LinkedIn") LinkedIn
      li.Hero-link
        a(href="#" title="Dribbble") Dribbble
      li.Hero-link
        a(href="#" title="Instagram") Instagram
      li.Hero-link(v-bind:class="`Text--${data.colors[range]}`")
        a(href="#" title="Contact") Contact
    span.Hero-scroll.Hero-scroll--data(v-if="type === 'about'")
</template>

<script>
import Icon from './Icon'

export default {
  props: [
    'type',
    'data',
    'range'
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
    },
    checkIndex(page) {
      const indexPage = this.data[this.type].pages.indexOf(page)
      return indexPage === this.range || this.data[this.type].pages.length === 1 ?
        'is-active' :
        indexPage === (this.range + 1) % Object.keys(this.data[this.type].pages).length ?
          'is-appearing' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Hero {
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

    &--pictures {
      width: grid(7);
      transform: none;

      @media (max-height: #{grid-media(10)}) {
        width: grid(6.5);
      }

      @media (max-height: #{grid-media(8)}) {
        width: grid(5);
      }

      @media (max-height: #{grid-media(6)}) {
        width: grid(4);
      }
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

  &-shape {
    transform: translateX(-50%);

    &--slide {
      transform-origin: 50% 50%;
      transform: translateX(-50%) scale(0);
      transition: transform $easing;
      transition-delay: .5s;
      will-change: transform;

      &.is-active {
        transform: translateX(-50%) scale(1);
      }

      &.is-appearing {
        transform: translateX(-50%) scale(0);
      }
    }
  }

  &-front,
  &-back {
    &--slide {
      opacity: 0;
      transition: opacity $easing;
      will-change: opacity;

      &.is-active {
        opacity: 1;
        transition-delay: 1s;
      }

      &.is-appearing {
        opacity: 0;
        transition-delay: 0s;
      }
    }
  }

  &-back {
    transform: translateX(-50%);
  }

  &-front,
  &-back,
  &-shape {
    position: absolute;
    width: 100%;
    height: auto;
  }

  &-back,
  &-shape {
    top: 0;
    left: 50%;
  }

  &-data {
    position: relative;
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
    position: relative;
    margin-bottom: $margin-t;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: .0625em;
    line-height: 1.125em;

    @media (max-width: #{grid-media(10)}) {
      font-size: 3.6rem;
    }

    @media (max-width: #{grid-media(4)}) {
      font-size: 2.8rem;
    }
  }

  &-titles,
  &-paragraphs {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(-#{$margin-t});
    transition: opacity $easing, transform $easing;
    will-change: opacity, transform;

    &:first-child {
      position: static;
    }

    &.is-active {
      opacity: 1;
      transform: translateY(0);
    }

    &.is-appearing {
      opacity: 0;
      transform: translateY(#{$margin-t});
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

  &-texts {
    position: relative;
  }

  &-paragraph {
    margin-bottom: $margin-t;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.75em;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-height: #{grid-media(8)}) {
      font-size: 1.8rem;
    }

    @media (max-height: #{grid-media(6)}) {
      font-size: 1.6rem;
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
      font-size: 1.2rem;
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
    transition: all $easing;

    &:last-child {
      margin-right: 0;
    }
  }

  &-scroll {
    $bar-size: .1rem;

    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 1;
    padding-right: $margin-t + $margin-n;
    font-size: 1.6rem;
    letter-spacing: .25rem;
    text-transform: uppercase;
    transform-origin: 0 100%;
    transform: rotateZ(90deg) translate(-100%, 50%);

    &::before {
      content: 'Scroll';

      @media (max-height: #{grid-media(6) + $gutter}) {
        display: none;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: calc(50% - #{$bar-size} / 2);
      right: 0;
      width: $margin-t;
      height: $bar-size;
      background-color: $white;
      transform-origin: 100% 0;
      animation: scrollbar-sliding 2.5s linear infinite;
    }

    &--data {
      display: none;

      @media (max-width: #{grid-media(8)}) {
        display: inline;
        left: auto;
        right: 0;
        transform-origin: 100% 100%;
        transform: rotateZ(90deg) translateY(100%);
      }

      @media (max-width: #{grid-media(6)}) {
        display: inline;
        right: 50%;
        transform: rotateZ(90deg) translateY(50%);
      }
    }
  }
}
</style>
