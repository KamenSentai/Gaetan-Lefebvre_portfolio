import PageController from './PageController'

import { TweenLite } from 'gsap'

class IndexController extends PageController {
  constructor(page = undefined) {
    super(page)
  }

  enter(el, done) {
    const page = this.page

    document.body.style.pointerEvents = 'none'
    const _hero = el.querySelector('.Hero')
    if (_hero) {
      TweenLite.fromTo('.Hero-shape', 1, { scale: 0 }, { scale: 1, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-back', 1, { opacity: 0 }, { opacity: 1, delay: .5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-front', 1, { opacity: 0 }, { opacity: 1, delay: .5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-description', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-texts', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1.5, ease: Power2.easeInOut })
      if (!page.$route.params.from || !page.$route.params.from.includes('projects-')) {
        TweenLite.fromTo('.Header-navbar', 1, { opacity: 0 }, { opacity: 1, delay: 2, ease: Power2.easeInOut })
      }
      TweenLite.fromTo('.Hero-hold', 1, { opacity: 0, x: -30 }, { opacity: 1, x: 0, delay: 2, ease: Power2.easeInOut, onComplete: () => {
        document.querySelector('.Hero-shape').style.transform = null
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
    const _hero = el.querySelector('.Hero')
    if (_hero) {
      TweenLite.fromTo('.Hero-shape', .5, { scale: 1 }, { scale: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-back', .5, { opacity: 1 }, { opacity: 0, delay: .25, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-front', .5, { opacity: 1 }, { opacity: 0, delay: .25, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-description', 1, { opacity: 1, y: 0 }, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-texts', 1, { opacity: 1, y: 0 }, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Hero-hold', 1, { opacity: 1, x: 0 }, { opacity: 0, x: 30, delay: .5, ease: Power2.easeInOut })
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

export default IndexController
