<template lang="pug">
.Icon.Cursor-frame--reduced.Cursor-pointer--beat
  nuxt-link.Icon-link(ref="link" :to="{ name: 'projects', params: { color: color, shape: shape, from: $route.name } }")
  svg.Icon-shape.Cursor-frame--reduced.Cursor-pointer--beat(
    ref="shape"
    @click="click"
    @touchstart="touchStart"
    width="40px" height="40px" viewBox="0 0 40 40"
  )
    g.Cursor-frame--reduced.Cursor-pointer--beat
      g.Icon-strokes.Cursor-frame--reduced.Cursor-pointer--beat
        circle.Icon-path(v-if="shape === 'circle'" cx="20" cy="20" r="18.8")
        polygon.Icon-path(v-if="shape === 'triangle'" points="20,1.1 1.2,33.6 38.8,33.6")
        rect.Icon-path(v-if="shape === 'square'" x="1.2" y="1.2" width="37.5" height="37.5")
        polygon.Icon-path(v-if="shape === 'pentagone'" points="20,1.2 1.2,14.8 8.4,36.9 31.6,36.9 38.8,14.8")
      g.Icon-fill.Cursor-frame--reduced.Cursor-pointer--beat(v-bind:class="isClicking ? 'is-active' : ''")
        circle.Icon-path(v-if="shape === 'circle'" cx="20" cy="20" r="18.8")
        polygon.Icon-path(v-if="shape === 'triangle'" points="20,1.1 1.2,33.6 38.8,33.6")
        rect.Icon-path(v-if="shape === 'square'" x="1.2" y="1.2" width="37.5" height="37.5")
        polygon.Icon-path(v-if="shape === 'pentagone'" points="20,1.2 1.2,14.8 8.4,36.9 31.6,36.9 38.8,14.8")

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
    click: function() {
      this.isClicking = true
    },
    touchStart: function() {
      this.isClicking = true
    }
  },
  mounted() {
    const _shapeIcon = this.$refs.shape
    const _linkIcon = this.$refs.link.$el

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
        transitionEvent && _shapeIcon.addEventListener(transitionEvent, () => {
        if (this.isClicking) {
          _linkIcon.click()
        }
      })
    }

    _shapeIcon.addEventListener('click', loadShape)
    _shapeIcon.addEventListener('touchstart', loadShape)
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/tools/variables';
@import '~assets/styles/tools/functions';

.Icon {
  $sizeIcon: 4.6rem;

  margin: 0 1rem;
  cursor: pointer;

  &-shape {
    width: $sizeIcon;
    height: $sizeIcon;
  }

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
    transition: transform linear 1.5s;
    will-change: transform;

    &.is-active {
      transform: none;
    }
  }

  &-path {
    pointer-events: none;
  }
}
</style>
