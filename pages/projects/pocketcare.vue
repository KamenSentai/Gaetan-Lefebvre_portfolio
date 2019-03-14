<template lang="pug">
div
  Header(
    :color="data.color"
    :shape="data.shape"
    :hasProject="false"
    :hasAbout="true"
    :hasHome="false"
    jumbotron="carousel"
    slide="0"
  )
  .Page(v-bind:class="`Page--${data.color}`")
    section.Slide
      Post(
        :color="data.color"
        :post="data.posts[0]"
      )
    section.Slide
      .Content
        .Content-header
          h3.Content-title.Content-title--trailed(data-aos="fade-left") Colors and typography
        .Content-table
          .Content-icons.Content-icons--half(data-aos="fade-left")
            Color(color="#00D6CF" :shape="data.shape")
            Color(color="#FFCB4A" :shape="data.shape")
            Color(color="#4A4A4A" :shape="data.shape")
            Color(color="#D3D3D3" :shape="data.shape")
          .Content-charters.Content-charters--half(data-aos="fade-left" data-aos-delay="250")
            Charter.Content-charter(
              name="Circular Std Bold"
              font="CircularStd-Bold"
            )
            Charter.Content-charter(
              name="Circular Std Book"
              font="CircularStd-Book"
            )
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[1]"
      )
      .Content
        .Content-header
          h3.Content-title.Text--center(data-aos="fade-up") Onboarding
        .Content-listing
          img.Shadow(data-aos="fade-left" data-aos-delay="0" src="~assets/images/Pocketcare/Onboarding_1.png" alt="Onboarding")
          img.Shadow(data-aos="fade-left" data-aos-delay="250" src="~assets/images/Pocketcare/Onboarding_2.png" alt="Onboarding")
          img.Shadow(data-aos="fade-left" data-aos-delay="500" src="~assets/images/Pocketcare/Onboarding_3.png" alt="Onboarding")
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
    section.Slide.Slide--banner
      Banner(src="Pocketcare/Banner_Inscription" alt ="Inscription")
    section.Slide.Slide--page
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-up") Cards and prescriptions
        .Content-item
          .Content-post(data-aos="fade-left")
            h4.Content-section Step 1
            p.Content-text To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand. We then thought it would be a good idea.
          img.Content-poster(data-aos="fade-left" data-aos-delay="250" src="~assets/images/Pocketcare/Phone_1.gif" alt="Phone animation 1")
        .Content-item
          .Content-post.Exception--post(data-aos="fade-right")
            h4.Content-section Step 2
            p.Content-text To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand.
          img.Content-poster(data-aos="fade-right" data-aos-delay="250" src="~assets/images/Pocketcare/Phone_2.gif" alt="Phone animation 2")
    section.Slide.Slide--block
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Profil and settings
          p.Content-description.Text--center To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand.
    .Intermediate(data-rate="20")
      .Intermediate-container
        img.Exception--screens(src="~assets/images/Pocketcare/Screens.png" alt="Screens")
    section.Slide
      Article(
        :color="data.color"
        :post="data.posts[3]"
      )
  Footer(
    to="tesla"
    title="Tesla"
  )
</template>

<script>
import Header from '~/components/Header'
import Post from '~/components/Post'
import Color from '~/components/Color'
import Charter from '~/components/Charter'
import Banner from '~/components/Banner'
import Article from '~/components/Article'
import Footer from '~/components/Footer'

export default {
  data() {
    return {
      data: {
        color: "green",
        shape: "circle",
        posts: [
          {
            top: "What",
            center: "is the",
            bottom: "projet ?",
            paragraphs: [
              "Pocketcare was born from a student project. The goal was to design an innovative solution for the medical field.",
              "After several interviews, we noticed a problem with the loss of prescriptions. In addition we found that one could use the vital and mutual card in a more efficient way. Pocketcare is the solution to these problems."
            ]
          }, {
            top: "What",
            center: "was the",
            bottom: "problem ?",
            paragraphs: [
              "The major problem has been to design an easy-to-access application for all members of a family. Knowing that the app uses not necessarily simple documents like the vital card or prescriptions. The whole process for registering a card has also been quite complicated."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "solved it ?",
            paragraphs: [
              "To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand. We then thought it would be a good idea to rework the cards and let the step validation icons speak for the card recording phase."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "worked ?",
            paragraphs: [
              "We worked on 6 on this project. All the team has participated in the UX phase, where we have listed different people. Subsequently, we went through 2 phases of wireframes, low and hight fie.",
              "Then we worked on 3 on the UI by cutting into 3 large parts the project, namely, the onboarding and registration, the registration of the cards and prescriptions and the profile part.",
              "Special thanks to Marina Ferreira Duarte and Clara Foggetti as UX / UI designer and Clarisse Garcia, Thomas Hénault and Marine Le Borgne as UX designer."
            ]
          }
        ]
      }
    }
  },
  components: {
    Header,
    Post,
    Color,
    Charter,
    Banner,
    Article,
    Footer
  },
  mounted() {
    const _body = document.body
    const _mouse = _body.querySelector('.Mouse')
    const _header = this.$el.querySelector('.Header')
    const _headerMainnav = _header.querySelector('.Header-mainnav')
    const _logo = this.$el.querySelector('.Logo')
    const _footer = this.$el.querySelector('.Footer')
    const _slides = Array.from(this.$el.querySelectorAll('.Slide, .Intermediate'))

    for (const _slide of _slides) {
      if (_slide.classList.contains('Intermediate')) {
        _slides.splice(_slides.indexOf(_slide) + 1, 1)
      }
    }

    let breakpointHeader = _headerMainnav.getBoundingClientRect().top
    let breakpoints = []
    let _footerOffset = _footer.offsetTop - breakpointHeader
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

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

      _headerMainnav.dataset.color = color
      _logo.dataset.color = color
    })

    window.addEventListener('mousemove', event => { mouse.y = event.clientY })

    const toggleCursor = () => {
      const offsetTop = Math.abs(_body.getBoundingClientRect().top) - breakpointHeader +  mouse.y
      let color
      let index

      for (let i = 0 ; i < breakpoints.length ; i++) {
        if (breakpoints[i] > offsetTop) {
          index = i
          break
        }
      }

      if (index !== undefined) color = index % 2 && mouse.y - _body.getBoundingClientRect().top > window.innerHeight ? 'black' : 'white'
      else color = 'white'

      _mouse.dataset.color = color
      window.requestAnimationFrame(toggleCursor)
    }
    toggleCursor()
  },
  transition: {
    name: 'csdc',
    mode: 'out-in',
    enter(el, done) {
      document.body.style.pointerEvents = 'none'

      if (!this.$route.params.from) {
        const _labelCarousel = el.querySelector('.Carousel-label')
        TweenLite.fromTo('.Carousel-title', 1, { opacity: 0 }, { opacity: 1, delay: 1.5, ease: Power2.easeInOut})
        TweenLite.fromTo('.Carousel-subtitle', 1, { opacity: 0 }, { opacity: 1, delay: 1.5, ease: Power2.easeInOut})
        TweenLite.fromTo('.Carousel-container', 1, { scale: 0, y: - window.innerHeight / 2, delay: 0 }, { scale: 1, y: 0, delay: 0, ease: Power2.easeInOut})
        TweenLite.fromTo('.Carousel-button', 1, { scale: 0, delay: 1 }, { scale: 1, delay: 1, ease: Power2.easeInOut })
        TweenLite.fromTo('.Carousel-image', 1, { opacity: 0, delay: 1 }, { opacity: 1, delay: 1, ease: Power2.easeInOut })
        TweenLite.fromTo('.Page', 1, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 1.5, ease: Power2.easeInOut, onComplete: () => {
          document.body.style.pointerEvents = 'auto'
          done()
        }})
      } else {
        document.body.style.pointerEvents = 'auto'
        done()
      }
    },
    leave(el, done) {
      document.body.style.pointerEvents = 'none'
      el.querySelector('.Logo').dataset.color = 'white'

      if (!this.$route.name.includes('projects-')) {
        document.body.style.overflow = 'hidden'
        const _labelCarousel = el.querySelector('.Carousel-label')
        if (_labelCarousel) _labelCarousel.classList.add('is-hidden')
        TweenLite.to('.Page', 1, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
        TweenLite.to('.Footer', 1, { opacity: 0, y: 30, delay: 0, ease: Power2.easeInOut })
        TweenLite.to('.Carousel-image', 1, { opacity: 0, delay: .5, ease: Power2.easeInOut })
        TweenLite.to('.Carousel-button', 1, { scale: 0, delay: .5, ease: Power2.easeInOut })
        TweenLite.to('.Carousel-container', 1, { scale: 0, y: - window.innerHeight / 2, delay: 1.5, ease: Power2.easeInOut, onComplete: ()  => {
          document.querySelector('.Mouse').dataset.color = 'white'
          document.body.style.pointerEvents = 'auto'
          document.body.style.overflow = 'auto'
          done()
        }})
      } else {
        document.body.style.pointerEvents = 'auto'
        done()
      }
    }
  }
}
</script>
