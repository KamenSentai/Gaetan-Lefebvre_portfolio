<template lang="pug">
.Hero(:data-color="data.colors[range]")
  .Hero-portrait(v-if="type === 'home'")
    img.Hero-back(
      v-lazy="require('~/assets/images/Home/Gaetan.png')"
      alt="Gaëtan back"
      draggable="false"
    )
    Glitch.Hero-shape(
      path="assets/images/Home/"
      :image="{ src: data.shapes[range], alt: `${data.colors[range]} ${data.shapes[range]}` }"
      :isPlaying="true"
    )
    img.Hero-front(
      v-lazy="require('~/assets/images/Home/Gaetan-cropped.png')"
      alt="Gaëtan front"
      draggable="false"
    )

  .Hero-portrait.Hero-portrait--pictures(v-if="type === 'about'")
    .Hero-backs
      img.Hero-back.Hero-back--slide(
        v-for="page in data[type].pages"
        v-bind:class="checkIndex(page)"
        v-lazy="require(`~/assets/images/About/${page.shape}_back.png`)"
        :alt="`${checkImage(page.shape)} back`"
        draggable="false"
        ref="backs"
      )
    .Hero-shapes
      div(v-for="page in data[type].pages")
        Glitch.Hero-shape.Hero-shape--slide(
          v-bind:class="checkIndex(page)"
          path="assets/images/About/"
          :image="{ src: page.shape, alt: `${checkImage(page.shape)} ${page.shape}` }"
          :isPlaying="checkIndex(page) === 'is-active'"
          ref="shapes"
        )
    .Hero-fronts
      img.Hero-front.Hero-front--slide(
        v-for="page in data[type].pages"
        v-bind:class="checkIndex(page)"
        v-lazy="require(`~/assets/images/About/${page.shape}_front.png`)"
        :alt="`${checkImage(page.shape)} front`"
        draggable="false"
        ref="fronts"
      )
    span.Hero-scroll

  aside.Hero-data
    .Hero-description
      .Hero-group(v-if="type === 'about'")
        .Hero-header(v-for="(page, index) in data[type].pages" v-bind:class="checkIndex(page)")
          h1.Hero-title(v-if="index === 0")
            span.Hero-above {{ page.above }}
            span.Hero-name
              span.Hero-first {{ page.first }}&nbsp;
              span.Hero-last(:data-color="page.color || data.colors[range]") {{ page.last }}
          h2.Hero-title(v-else)
            span.Hero-above {{ page.above }}
            span.Hero-name
              span.Hero-first {{ page.first }}&nbsp;
              span.Hero-last(:data-color="page.color || data.colors[range]") {{ page.last }}
      .Hero-group(v-else)
        .Hero-header(v-for="(page, index) in data[type].pages" v-bind:class="checkIndex(page)")
          .Hero-title(v-if="index === 0")
            span.Hero-above {{ page.above }}
            h1.Hero-name
              span.Hero-first {{ page.first }}&nbsp;
              span.Hero-last(:data-color="page.color || data.colors[range]") {{ page.last }}
      .Hero-texts
        .Hero-paragraphs.Text-group(v-for="(page, index) in data[type].pages" v-bind:class="[checkIndex(page), `Text-group--${data.colors[range]}`]")
          p.Hero-paragraph(v-for="paragraph in page.paragraphs" v-html="paragraph")

    .Hero-click(v-if="type === 'home'")
      span.Hero-heavy Click on
      Icon(
        :color="data.colors[range]"
        :shape="data.shapes[range]"
        ref="icon"
      )
      span.Hero-thin to continue

    ul.Hero-links(v-else-if="type === 'about'")
      li.Hero-link.Cursor-frame--increase
        a.Cursor-frame--increase(href="https://www.linkedin.com/in/gaetan-lefebvre" title="LinkedIn" target="_blank" rel="noopener") LinkedIn
      li.Hero-link.Cursor-frame--increase
        a.Cursor-frame--increase(href="https://www.dribbble.com/gaetanlefebvre" title="Dribbble" target="_blank" rel="noopener") Dribbble
      li.Hero-link.Cursor-frame--increase
        a.Cursor-frame--increase(href="https://www.behance.net/gaetanlefebvre" title="Behance" target="_blank" rel="noopener") Behance
      li.Hero-link.Cursor-frame--increase(v-bind:class="`Text--${data.colors[range]}`")
        a.Cursor-frame--increase(href="mailto:gaetan.lefebvre@hetic.net" title="gaetan.lefebvre@hetic.ne") Contact
    span.Hero-scroll.Hero-scroll--data(v-if="type === 'about'")
</template>

<script>
import Icon from './Icon'
import Glitch from './Glitch'

export default {
  props: [
    'type',
    'data',
    'range'
  ],

  components: {
    Icon,
    Glitch
  },

  methods: {
    checkIndex(page) {
      const indexPage = this.data[this.type].pages.indexOf(page)
      return indexPage === this.range || this.data[this.type].pages.length === 1 ?
        'is-active' :
        indexPage === (this.range + 1) % Object.keys(this.data[this.type].pages).length ?
          'is-appearing' : ''
    },
    checkImage(shape) {
      switch (shape) {
        case 'circle':
          return 'Skeleton'
          break;
        case 'triangle':
          return 'Headphone'
          break;
        case 'square':
          return 'Book'
          break;
        case 'pentagone':
          return 'Drink'
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Hero {
  $rootHero: &;

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: $margin-t;

  @each $key, $value in $colors {
    &[data-color="#{$key}"] {
      *::selection {
        color: $white;
        background-color: $value;
      }
    }
  }

  @media (max-height: #{grid-media(7)}) {
    padding-top: 0;
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
      background: linear-gradient(
        to bottom,
        hsla(0, 0%, 8%, 0) 0%,
        hsla(0, 0%, 8%, 0.013) 8.1%,
        hsla(0, 0%, 8%, 0.049) 15.5%,
        hsla(0, 0%, 8%, 0.104) 22.5%,
        hsla(0, 0%, 8%, 0.175) 29%,
        hsla(0, 0%, 8%, 0.259) 35.3%,
        hsla(0, 0%, 8%, 0.352) 41.2%,
        hsla(0, 0%, 8%, 0.45) 47.1%,
        hsla(0, 0%, 8%, 0.55) 52.9%,
        hsla(0, 0%, 8%, 0.648) 58.8%,
        hsla(0, 0%, 8%, 0.741) 64.7%,
        hsla(0, 0%, 8%, 0.825) 71%,
        hsla(0, 0%, 8%, 0.896) 77.5%,
        hsla(0, 0%, 8%, 0.951) 84.5%,
        hsla(0, 0%, 8%, 0.987) 91.9%,
        hsla(0, 0%, 8%, 1) 100%
      );

      @media (max-width: #{grid-media(8)}) {
        display: none;
      }
    }
  }

  &-glitch {
    position: relative;
  }

  &-shape {
    transform: translateX(-50%);

    &--slide {
      transform-origin: 50% 50%;
      transform: translateX(-50%) scale(0);
      transition: transform $easing-duration;
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
      transition: opacity $easing-duration;
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

    @media (max-height: #{grid-media(5)}) {
      margin-bottom: $margin-t;
    }
  }

  &-group {
    position: relative;
    margin-bottom: $margin-t;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: .0625em;
    line-height: 1.125em;

    @media (max-width: #{grid-media(10)}) {
      font-size: 3.6rem;
    }

    @media
    (max-width: #{grid-media(4)}),
    (max-height: #{grid-media(5)}) {
      font-size: 2.8rem;
    }

    @media (max-height: #{grid-media(4)}) {
      margin-bottom: $margin-n;
      font-size: 2.4rem;
    }
  }

  &-header,
  &-paragraphs {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(-#{$margin-t});
    transition: opacity $easing-duration, transform $easing-duration;
    will-change: opacity, transform;
    pointer-events: none;

    &:first-child {
      position: static;
    }

    &.is-active {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    &.is-appearing {
      opacity: 0;
      transform: translateY(#{$margin-t});
    }
  }

  &-title {
    display: flex;
    flex-direction: column;
  }

  &-above {
    margin-top: 1em;
    color: $dark;

    @media
    (max-height: #{grid-media(6.5)}),
    (max-width: #{grid-media(6)}) {
      margin-top: 0;
    }
  }

  &-first {
    color: $white;
  }

  &-last {
    @each $key, $value in $colors {
      &[data-color="#{$key}"] {
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
      line-height: 1.5em;
    }

    @media (max-height: #{grid-media(7)}) {
      font-size: 1.8rem;
    }

    @media (max-height: #{grid-media(6)}) {
      font-size: 1.6rem;
    }

    @media (max-height: #{grid-media(5.25)}) {
      font-size: 1.4rem;
      margin-bottom: $margin-n;
    }

    @media (max-height: #{grid-media(4)}) {
      line-height: 1.25em;
    }
  }

  &-click {
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

    @media (max-height: #{grid-media(7)}) {
      margin-bottom: $margin-t;
    }

    @media (max-height: #{grid-media(4)}) {
      margin-bottom: $margin-n;
    }
  }

  &-link {
    margin-right: $margin-t;
    font-size: 1.6rem;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.75em;
    transition: all $easing-duration;

    &:last-child {
      margin-right: 0;
    }

    @media (max-height: #{grid-media(6.5)}) {
      margin-right: $margin-n;
      font-size: 1.4rem;
    }

    @media (max-height: #{grid-media(5)}) {
      font-size: 1.2rem;
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

    @media (max-height: #{grid-media(7)}) {
      font-size: 1.2rem;
    }

    &::before {
      content: 'Scroll';

      @media
      (max-height: #{grid-media(6.5)}),
      (max-width: #{grid-media(6)}) and (max-height: #{grid-media(7)}),
      (max-width: #{grid-media(4)}) and (max-height: #{grid-media(8.5)}) {
        position: absolute;
        right: 100%;
        bottom: 100%;
        transform-origin: 100% 100%;
        transform: rotateZ(-90deg) translateX(50%);
      }

      @media
      (max-width: #{grid-media(6)}) and (max-height: #{grid-media(3.5)}),
      (max-width: #{grid-media(4)}) and (max-height: #{grid-media(4.5)}) {
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
