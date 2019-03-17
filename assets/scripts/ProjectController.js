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

  init() {
    const page = this.page

    const _body = document.body
    const _header = page.$el.querySelector('.Header')
    const _headerMainnav = _header.querySelector('.Header-mainnav')
    const _logo = page.$el.querySelector('.Logo')
    const _footer = page.$el.querySelector('.Footer')
    const _slides = Array.from(page.$el.querySelectorAll('.Slide, .Intermediate'))
    const _alternatedsContent = Array.from(page.$el.querySelectorAll('.Content-alternated'))

    let breakpointHeader = _headerMainnav.getBoundingClientRect().top
    let breakpoints = []
    let _footerOffset = _footer.offsetTop - breakpointHeader
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    for (const _slide of _slides) {
      if (_slide.classList.contains('Intermediate')) {
        _slides.splice(_slides.indexOf(_slide) + 1, 1)
      }
    }

    const updateBreakpoints = () => {
      _footerOffset = _footer.offsetTop - breakpointHeader

      if (_footerOffset > 0) {
        breakpointHeader = _headerMainnav.getBoundingClientRect().top
        breakpoints = []

        for (const _slide of _slides) {
          if (_slide.classList.contains('Slide')) breakpoints.push(_slide.offsetTop - breakpointHeader)
          else breakpoints.push(_slide.offsetTop - breakpointHeader + _slide.offsetHeight * (1 - _slide.dataset.rate / 100))
        }
        breakpoints.push(_footerOffset)
      }
      setTimeout(updateBreakpoints, 500)
    }
    updateBreakpoints()

    window.addEventListener('resize', updateBreakpoints)

    window.addEventListener('scroll', () => {
      const offsetTop = Math.abs(_body.getBoundingClientRect().top)
      let color
      let index

      for (let i = 0 ; i < breakpoints.length ; i++) {
        if (breakpoints[i] > offsetTop) {
          index = i
          break
        }
      }

      if (index !== undefined) color = index % 2 ? 'black' : 'white'
      else color = 'white'

      _headerMainnav.dataset.theme = color
      _logo.dataset.theme = color
    })

    window.addEventListener('mousemove', event => { mouse.y = event.clientY })

    if (_alternatedsContent.length > 0) this.animateLines(_alternatedsContent)
  }

  animateLines(_alternatedsContent) {
    for (const _alternatedContent of _alternatedsContent) {
      const _objectContent = _alternatedContent.querySelector('.Content-object')

      const listenScroll = () => {
        if (_objectContent.classList.contains('aos-animate')) {
          _alternatedContent.classList.remove('is-inactive')
          window.removeEventListener('scroll', listenScroll)
        } else {
          window.addEventListener('scroll', listenScroll)
        }
      }
      listenScroll()
    }
  }
}

export default ProjectController
