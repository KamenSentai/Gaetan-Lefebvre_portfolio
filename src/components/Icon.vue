<template lang="pug">
  .Icon
    svg.Icon-shape(@mousedown="mouseDown" @mouseup="mouseUp" width="37px" height="36px" viewBox="0 0 37 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
      g(transform="translate(-1, -2)")
        g.Icon-strokes(stroke-width="1" fill="none" fill-rule="evenodd")
          circle(v-if="shape === 'circle'" cx="19.5" cy="19.5" r="17")
          polygon(v-if="shape === 'triangle'" transform="translate(19.360294, 28.493055) rotate(136.000000) translate(-19.360294, -28.493055) " points="11.1624486 11.1720037 36.6712247 35.5739934 2.04936286 45.8141065")
          rect(v-if="shape === 'square'" x="2.5" y="2.5" width="34" height="34")
          path(v-if="shape === 'pentagone'" d="M19.5,2.61803399 L1.54218318,15.6651516 L8.40145884,36.7758314 L30.5985412,36.7758314 L37.4578168,15.6651516 L19.5,2.61803399 Z")
        g.Icon-fill(v-bind:class="isClicking ? 'is-active' : ''" stroke-width="1" stroke="none" fill-rule="evenodd")
          circle(v-if="shape === 'circle'" cx="19.5" cy="19.5" r="17")
          polygon(v-if="shape === 'triangle'" transform="translate(19.360294, 28.493055) rotate(136.000000) translate(-19.360294, -28.493055) " points="11.1624486 11.1720037 36.6712247 35.5739934 2.04936286 45.8141065")
          rect(v-if="shape === 'square'" x="2.5" y="2.5" width="34" height="34")
          path(v-if="shape === 'pentagone'" d="M19.5,2.61803399 L1.54218318,15.6651516 L8.40145884,36.7758314 L30.5985412,36.7758314 L37.4578168,15.6651516 L19.5,2.61803399 Z")
    router-link.Icon-link(:to="{ name: 'projects' }")
</template>

<script>
export default {
  data() {
    return {
      isClicking: false
    }
  },
  props: [
    'shape'
  ],
  methods: {
    mouseDown: function() {
      this.isClicking = true
    },
    mouseUp: function() {
      this.isClicking = false
    }
  },
  mounted() {
    const _iconShape = this.$el.querySelector('.Icon-shape')
    const _iconLink = this.$el.querySelector('.Icon-link')

    const whichTransitionEvent = () => {
      let t
      const el = document.createElement('fakeelement')
      const transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      }

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t]
        }
      }
    }

    _iconShape.addEventListener('mousedown', () => {
      const transitionEvent = whichTransitionEvent()
        transitionEvent && _iconShape.addEventListener(transitionEvent, () => {
        if (this.isClicking) {
          this.isClicking = false
          _iconLink.click()
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Icon {
  cursor: pointer;

  &-strokes {
    stroke: $white;
  }

  &-fill {
    fill: $white;
    transform-origin: 50% 50%;
    transform: scale(0);
    transition: transform $easing;
    will-change: transform;

    &.is-active {
      transform: none;
    }
  }
}
</style>
