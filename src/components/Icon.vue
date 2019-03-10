<template lang="pug">
.Icon.Cursor-frame--reduced.Cursor-pointer--beat
  router-link.Icon-link(:to="{ name: 'projects', params: { color: color, shape: shape } }")
  svg.Icon-shape.Cursor-frame--reduced.Cursor-pointer--beat(
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @touchstart="touchStart"
    @touchend="touchEnd"
    width="40px" height="40px" viewBox="0 0 40 40"
  )
    defs
      g#shape
        circle(v-if="shape === 'circle'" cx="20" cy="20" r="18.8")
        polygon(v-if="shape === 'triangle'" points="20,1.1 1.2,33.6 38.8,33.6")
        rect(v-if="shape === 'square'" x="1.2" y="1.2" width="37.5" height="37.5")
        polygon(v-if="shape === 'pentagone'" points="20,1.2 1.2,14.8 8.4,36.9 31.6,36.9 38.8,14.8")
    g.Cursor-frame--reduced.Cursor-pointer--beat
      g.Icon-strokes.Cursor-frame--reduced.Cursor-pointer--beat
        use(href="#shape")
      g.Icon-fill.Cursor-frame--reduced.Cursor-pointer--beat(v-bind:class="isClicking ? 'is-active' : ''")
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
    },
    touchStart: function() {
      this.isClicking = true
    },
    touchEnd: function() {
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

    const loadShape = event => {
      event.preventDefault()
      const transitionEvent = whichTransitionEvent()
        transitionEvent && _iconShape.addEventListener(transitionEvent, () => {
        if (this.isClicking) {
          this.isClicking = false
          _iconLink.click()
        }
      })
    }

    _iconShape.addEventListener('mousedown', loadShape)
    _iconShape.addEventListener('touchstart', loadShape)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/variables';
@import '../styles/tools/functions';

.Icon {
  margin: 0 1rem;
  cursor: pointer;

  &-strokes,
  &-fill {
    transform-origin: 50% 50%;
  }

  &-strokes {
    fill: none;
    stroke: $white;
    stroke-width: 1;
    transform: scale(.75);
    animation: mini-scale 2s ease-in-out infinite;
    will-change: transform;
  }

  &-fill {
    fill: $white;
    transform: scale(0);
    transition: transform $easing-duration;
    transition-duration: 2s;
    will-change: transform;

    &.is-active {
      transform: none;
    }
  }
}
</style>
