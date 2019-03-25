import PageController from './PageController'

import { TweenLite } from 'gsap'
import AOS from 'aos'

import 'aos/dist/aos.css'

class ProjectController extends PageController {
  constructor(page = undefined) {
    super(page)
    this.route = page.$route.name
  }

  enter(el, done) {
    const page = this.page

    document.body.style.pointerEvents = 'none'
    document.body.classList.add('is-active')

    el.querySelector('.Header').classList.add('is-inactive')
    el.querySelector('.Logo').dataset.forced = ''
    el.querySelector('.Header-navigation').dataset.forced = ''
    el.querySelector('.Header-mainnav').dataset.forced = ''

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
      TweenLite.fromTo('.Carousel-title', 1, { opacity: 0 }, { opacity: 1, delay: 1.5, ease: Power2.easeInOut })
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
    document.body.classList.remove('is-active')

    setTimeout(() => {
      el.querySelector('.Logo').dataset.theme = 'white'
      el.querySelector('.Header-navigation').dataset.theme = 'white'
      el.querySelector('.Header-mainnav').dataset.theme = 'white'
      el.querySelector('.Logo').dataset.forced = 'white'
      el.querySelector('.Header-navigation').dataset.forced = 'white'
      el.querySelector('.Header-mainnav').dataset.forced = 'white'
    }, 1000)

    if (!page.$route.name.includes('projects-')) {
      const _labelCarousel = el.querySelector('.Carousel-label')
      el.querySelector('.Header').classList.add('is-inactive')

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
      const _logo = el.querySelector('.Logo')
      const _footer = el.querySelector('.Footer')
      const _footerTop = _footer.getBoundingClientRect().top

      _footer.classList.add('is-active')
      setTimeout(() => {
        _logo.dataset.color = _footer.dataset.color
      }, 1000)

      TweenLite.to('.Carousel-extra', .5, { opacity: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Footer-image', .5, { opacity: 0, delay: 0, ease: Power2.easeInOut })
      TweenLite.to('.Page', 1, { opacity: 0, delay: 1, ease: Power2.easeInOut })
      TweenLite.to('.Footer-container', .5, { height: window.innerHeight, y: - _footerTop, delay: .5, ease: Power2.easeInOut, onComplete: () => {
        setTimeout(() => {
          document.body.style.pointerEvents = 'auto'
          document.body.classList.add('is-active')
          done()
        }, 1500)
      }})
    } else {
      document.body.style.pointerEvents = 'auto'
      done()
    }
  }

  init() {
    AOS.init({
      disable: 'mobile',
      once: false,
      duration: 1000,
      easing: 'cubic-bezier(0.72, 0, 0.21, 1)'
    })

    const page = this.page

    const _body = document.body
    const _header = page.$el.querySelector('.Header')
    const _headerMainnav = _header.querySelector('.Header-mainnav')
    const _logo = page.$el.querySelector('.Logo')
    const _footer = page.$el.querySelector('.Footer')
    const _slides = Array.from(page.$el.querySelectorAll('.Slide, .Intermediate'))
    const _alternatedsContent = Array.from(page.$el.querySelectorAll('.Content-alternated'))
    const _lazyloads = Array.from(page.$el.querySelectorAll('.Lazyload'))
    const _images = Array.from(page.$el.querySelectorAll('img'))

    let breakpointHeader = _headerMainnav.getBoundingClientRect().top
    let breakpoints = []
    let _footerOffset = _footer.offsetTop - breakpointHeader

    for (const _slide of _slides) if (_slide.classList.contains('Intermediate')) _slides.splice(_slides.indexOf(_slide) + 1, 1)

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

    const colorizeHeader = () => {
      const offsetTop = Math.abs(_body.getBoundingClientRect().top)
      let color = 'white'
      let index

      for (let i = 0 ; i < breakpoints.length ; i++) {
        if (breakpoints[i] > offsetTop) {
          index = i
          break
        }
      }

      if (index !== undefined && Math.abs(page.$el.getBoundingClientRect().top) > 0) color = index % 2 ? 'black' : 'white'
      else color = 'white'

      _headerMainnav.dataset.theme = color
      _logo.dataset.theme = color
    }
    colorizeHeader()

    window.addEventListener('resize', updateBreakpoints)
    window.addEventListener('scroll', colorizeHeader)

    const checkRoute = () => {
      if (page.$route.name === this.route) window.requestAnimationFrame(checkRoute)
      else {
        window.removeEventListener('resize', updateBreakpoints)
        window.removeEventListener('scroll', colorizeHeader)
        window.cancelAnimationFrame(checkRoute)
      }
    }
    checkRoute()

    if (_lazyloads.length > 0) this.lazyload(_lazyloads)
    if (_alternatedsContent.length > 0) this.animateLines(_alternatedsContent)
    if (_images.length > 0) this.checkImages(_images)

    if (
      navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) this.removeScrollAnimation()
  }

  lazyload(_lazyloads) {
    for (const _lazyload of _lazyloads) {
      const _imgsLazyload = Array.from(_lazyload.querySelectorAll('img'))

      for (const _imgLazyload of _imgsLazyload) {
        const src = _imgLazyload.getAttribute('src')

        _imgLazyload.removeAttribute('src')

        _imgLazyload.addEventListener('load', () => {
          _lazyload.classList.add('Lazyload--loaded')
        })

        _imgLazyload.setAttribute('src', src)
      }
    }
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

  removeScrollAnimation() {
    const _aosElements = Array.from(document.querySelectorAll('[data-aos]'))
    for (const _aosElement of _aosElements) {
      _aosElement.dataset.aos = ''
    }
  }

  checkImages(_images) {
    let isLoaded = true

    for (const _image of _images) {
      if (!_image.complete ||  _image.naturalWidth === 0 || _image.naturalHeight === 0) {
        isLoaded = false
        break
      }
    }

    if (!isLoaded) {
      setTimeout(() => {
        this.checkImages(_images)
      }, 2500)
    } else {
      AOS.refresh()

      if (
        !(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i))
      ) {
        this.runParallax()
      }
    }
  }

  runParallax() {
    const page = this.page

    const _parallaxes = Array.from(page.$el.querySelectorAll('.Parallax'))

    if (_parallaxes.length > 0) {
      const currentRoute = page.$route.name
      const _parallaxesData = []

      for (const _parallax of _parallaxes) {
        const _parallaxStyle = _parallax.currentStyle || window.getComputedStyle(_parallax)
        _parallaxesData.push({ element: _parallax, transform: _parallaxStyle.transform, target: _parallax.classList.contains('Banner') ? _parallax.parentNode : _parallax })
      }

      const updateParallax = () => {
        if (page.$route.name === currentRoute) {
          for (const _parallaxData of _parallaxesData) {
            const translateValue = (_parallaxData.target.getBoundingClientRect().top + _parallaxData.target.getBoundingClientRect().height / 2) / 25
            _parallaxData.element.style.transform = `${_parallaxData.transform} translateY(${translateValue}px)`
          }
          window.requestAnimationFrame(updateParallax)
        } else window.cancelAnimationFrame(updateParallax)
      }
      updateParallax()
    }
  }
}

export default ProjectController
