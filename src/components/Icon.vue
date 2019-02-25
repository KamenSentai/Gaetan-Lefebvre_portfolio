<template lang="pug">
.Icon
  router-link.Icon-link(:to="{ name: 'projects', params: { color: color, shape: shape } }")
  svg.Icon-shape(@mousedown="mouseDown" @mouseup="mouseUp" width="40px" height="40px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink")
    defs
      g#shape
        circle(v-if="shape === 'circle'" cx="20" cy="20" r="18.8")
        polygon(v-if="shape === 'triangle'" points="20,1.1 1.2,33.6 38.8,33.6")
        rect(v-if="shape === 'square'" x="1.2" y="1.2" width="37.5" height="37.5")
        polygon(v-if="shape === 'pentagone'" points="20,1.2 1.2,14.8 8.4,36.9 31.6,36.9 38.8,14.8")
    g
      g.Icon-strokes
        use(href="#shape")
      g.Icon-fill(v-bind:class="isClicking ? 'is-active' : ''")
        use(href="#shape")
</template>

<script>
export default {
  data() {
    return {
      isClicking: false
    }
  },
  props: [
    'color',
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

      for (t in transitions) if (el.style[t] !== undefined) return transitions[t]
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
  margin: 0 1rem;
  cursor: pointer;

  &-strokes {
    fill: none;
    stroke: $white;
    stroke-width: 1;
  }

  &-fill {
    fill: $white;
    transform-origin: 50% 50%;
    transform: scale(0);
    transition: transform $easing;
    transition-duration: 2s;
    will-change: transform;

    &.is-active {
      transform: none;
    }
  }
}
</style>
