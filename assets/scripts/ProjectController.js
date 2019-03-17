import PageController from './PageController'

import { TweenLite } from 'gsap'

class ProjectController extends PageController {
  constructor(page = undefined) {
    super(page)
  }

  enter(el, done) {
    const page = this.page

    document.body.style.pointerEvents = 'none'

    if (!page.$route.params.from) {
      const _labelCarousel = el.querySelector('.Carousel-label')
      TweenLite.fromTo('.Carousel-title', 1, { opacity: 0 }, { opacity: 1, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-subtitle', 1, { opacity: 0 }, { opacity: 1, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-container', 1, { scale: 0, y: - window.innerHeight / 2, delay: 0 }, { scale: 1, y: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-button', 1, { scale: 0, delay: 1 }, { scale: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-image', 1, { opacity: 0, delay: 1 }, { opacity: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Page', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Footer', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Header-navbar', 1, { opacity: 0 }, { opacity: 1, delay: 2, ease: Power2.easeInOut, onComplete: () => {
        document.body.style.pointerEvents = 'auto'
        done()
      }})
    } else if (page.$route.params.from.includes('projects-')) {
      TweenLite.fromTo('.Carousel-neon', 1, { scale: 0 }, { scale: 1, delay: 1, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-button', 1, { scale: 0 }, { scale: 1, delay: 1.5, ease: Power2.easeInOut })
      TweenLite.fromTo('.Carousel-layer', 1, { opacity: 0 }, { opacity: 1, delay: 2, ease: Power2.easeInOut })
      document.body.style.pointerEvents = 'auto'
      done()
    } else {
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }

  leave(el, done) {
    const page = this.page

    document.body.style.pointerEvents = 'none'
    el.querySelector('.Logo').dataset.theme = 'white'
    el.querySelector('.Header-navigation').dataset.theme = 'white'
    el.querySelector('.Header-mainnav').dataset.theme = 'white'

    if (!page.$route.name.includes('projects-')) {
      document.body.style.overflow = 'hidden'
      const _labelCarousel = el.querySelector('.Carousel-label')
      if (_labelCarousel) _labelCarousel.classList.add('is-hidden')
      TweenLite.to('.Page', 1, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Footer', 1, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-image', 1, { opacity: 0, delay: .5, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-button', 1, { scale: 0, delay: .5, ease: Power2.easeInOut })
      TweenLite.to('.Carousel-container', 1, { scale: 0, y: - window.innerHeight / 2, delay: 1.5, ease: Power2.easeInOut, onComplete: ()  => {
        document.body.style.pointerEvents = 'auto'
        done()
      }})
    } else if (page.$route.params.from) {
      document.body.style.overflow = 'hidden'
      const _logo = el.querySelector('.Logo')
      const _footer = el.querySelector('.Footer')
      const _footerTop = _footer.getBoundingClientRect().top

      _logo.dataset.color = _footer.dataset.color
      _footer.classList.add('is-active')

      TweenLite.to('.Footer-image', .5, { opacity: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Page', 1, { opacity: 0, delay: 1, ease: Power2.easeInOut })
      TweenLite.to('.Footer-container', .5, { height: window.innerHeight, y: - _footerTop, delay: .5, ease: Power2.easeInOut, onComplete: () => {
        setTimeout(() => {
          document.body.style.pointerEvents = 'auto'
          document.body.style.overflow = 'auto'
          done()
        }, 1500)
      }})
    } else {
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }
}

export default ProjectController
