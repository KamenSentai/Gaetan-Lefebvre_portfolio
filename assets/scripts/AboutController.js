import PageController from './PageController'

import { TweenLite } from 'gsap'

class AboutController extends PageController {
  constructor(page = undefined) {
    super(page)
  }

  enter(el, done) {
    document.body.style.pointerEvents = 'none'
    const _shapeHero = el.querySelector('.Hero-shape.is-active')
    if (_shapeHero) {
      TweenLite.fromTo('.Hero-shape.is-active', 1, { width: 0, top: _shapeHero.getBoundingClientRect().width / 2 }, { width: '100%', top: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-backs', 1, { opacity: 0 }, { opacity: 1, delay: .5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-fronts', 1, { opacity: 0 }, { opacity: 1, delay: .5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-description', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-texts', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-links', 1, { opacity: 0, x: -30 }, { opacity: 1, x: 0, delay: 2, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-scroll', 1, { opacity: 0 }, { opacity: 1, delay: 2, ease: Power2.easeInOut })
      TweenLite.fromTo('.Header-navbar', 1, { opacity: 0 }, { opacity: 1, delay: 2, ease: Power2.easeInOut, onComplete: () => {
        document.body.style.pointerEvents = 'auto'
        done()
      }})
    } else {
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }

  leave(el, done) {
    document.body.style.pointerEvents = 'none'
    const _shapeHero = el.querySelector('.Hero-shape.is-active')
    if (_shapeHero) {
      TweenLite.fromTo('.Hero-shape.is-active', 1, { width: '100%', top: 0 }, { width: 0, top: _shapeHero.getBoundingClientRect().width / 2, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-backs', .5, { opacity: 1 }, { opacity: 0, delay: .25, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-fronts', .5, { opacity: 1 }, { opacity: 0, delay: .25, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-description', 1, { opacity: 1, y: 0 }, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-texts', 1, { opacity: 1, y: 0 }, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-links', 1, { opacity: 1, x: 0 }, { opacity: 0, x: 30, delay: .5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-scroll', 1, { opacity: 1 }, { opacity: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Header-navbar', .5, { opacity: 1 }, { opacity: 0, delay: 1, ease: Power2.easeInOut, onComplete: () => {
        document.body.style.pointerEvents = 'auto'
        done()
      }})
    } else {
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }
}

export default AboutController
