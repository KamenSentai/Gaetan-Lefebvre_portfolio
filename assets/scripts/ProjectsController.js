import PageController from './PageController'

import { TweenLite } from 'gsap'

class ProjectsController extends PageController {
  constructor(page = undefined) {
    super(page)
  }

  enter(el, done) {
    document.body.style.pointerEvents = 'none'
    const _buttonsCarousel = el.querySelector('.Carousel-buttons')
    if (_buttonsCarousel) {
      if (_buttonsCarousel.getBoundingClientRect().width > _buttonsCarousel.getBoundingClientRect().height) {
        TweenLite.fromTo('.Carousel-container', 1, { scale: 0, left: - window.innerWidth / 2 }, { scale: 1, left: 0, delay: 0, ease: Power2.easeInOut })
      } else {
        TweenLite.fromTo('.Carousel-container', 1, { scale: 0, top: - window.innerHeight / 2 }, { scale: 1, top: 0, delay: 0, ease: Power2.easeInOut })
      }
      TweenLite.fromTo('.Carousel-button', 1, { scale: 0 }, { scale: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-neon', 1, { scale: 0 }, { scale: 1, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-layer--back', .5, { opacity: 0 }, { opacity: 1, delay: 2.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-layer--front', .5, { opacity: 0 }, { opacity: 1, delay: 2.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-lock', 1, { opacity: 0 }, { opacity: .25, delay: 2.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Header-navbar', 1, { opacity: 0 }, { opacity: 1, delay: 2.5, ease: Power2.easeInOut, onComplete: () => {
        document.body.style.pointerEvents = 'auto'
        done()
      }})
    } else {
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }

  leave(el, done) {
    const page = this.page

    document.body.style.pointerEvents = 'none'
    if (page.$route.name.includes('projects-')) {
      page.$el.querySelector('.Carousel-container').classList.add('Carousel-container--case')
      TweenLite.to('.Carousel-extra', 0, { opacity: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Header-item:first-child', 1, { opacity: 0, ease: Power2.easeInOut })

      setTimeout(() => {
        document.body.style.pointerEvents = 'auto'
        done()
      }, 1000)
    } else if (page.$route.name == 'index' || page.$route.name == 'about') {
      const _buttonsCarousel = el.querySelector('.Carousel-buttons')
      const _labelsCarousel = Array.from(el.querySelectorAll('.Carousel-label'))
      const _extrasCarousel = Array.from(el.querySelectorAll('.Carousel-extra'))
      for (const _extraCarousel of _extrasCarousel) _extraCarousel.classList.add('is-hidden')
      TweenLite.to('.Carousel-progress', 0, { opacity: 0, y: 30, ease: Power2.easeInOut})
      TweenLite.to('.Carousel-extra', 0, { opacity: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-lock', 0, { opacity: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-layer--front', .5, { opacity: 0, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-neon', .5, { scale: 0, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-layer--back', .5, { opacity: 0, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-button', 1, { scale: 0, delay: 1.5, ease: Power2.easeInOut })

      setTimeout(() => {
        for (const _labelCarousel of _labelsCarousel) _labelCarousel.classList.add('is-hidden')
        if (_buttonsCarousel.getBoundingClientRect().width > _buttonsCarousel.getBoundingClientRect().height)
          TweenLite.to('.Carousel-container', 1, { scale: 0, left: - window.innerWidth / 2, delay: 2, ease: Power2.easeInOut })
        else
          TweenLite.to('.Carousel-container', 1, { scale: 0, top: - window.innerHeight / 2, delay: 2, ease: Power2.easeInOut })

        TweenLite.fromTo('.Header-navbar', .5, { opacity: 1 }, { opacity: 0, delay: 2.5, ease: Power2.easeInOut, onComplete: () => {
          document.body.style.pointerEvents = 'auto'
          done()
        }})
      }, 500)
    } else {
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }
}

export default ProjectsController
