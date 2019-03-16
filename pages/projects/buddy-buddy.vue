<template lang="pug">
div
  Header(
    :color="data.color"
    :shape="data.shape"
    :hasProject="false"
    :hasAbout="true"
    :hasHome="false"
    jumbotron="carousel"
    slide="2"
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
            Color(color="#FF303F" :shape="data.shape")
            Color(color="#FFD6D9" :shape="data.shape")
            Color(color="#BDBDBD" :shape="data.shape")
            Color(color="#FFFFFF" :shape="data.shape")
          .Content-charters.Content-charters--half(data-aos="fade-left" data-aos-delay="250")
            Charter.Content-charter(
              name="CeraGR - Bold"
              font="CeraGR-Bold"
            )
            Charter.Content-charter(
              name="Bariol Regular"
              font="Bariol-Regular"
            )
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[1]"
      )
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Case study home
          p.Content-description.Text--center We can find on the home page of the case study a short vidéo of the project, with the comptences used by the team and 3 navigations tools (previous and next project) and the scroll.
        img.Content-main(data-aos="fade-up" src="~assets/images/BuddyBuddy/Computer.png" alt="Computer")
    section.Slide.Slide--crossed
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center The case study
          p.Content-description.Content-description--large.Text--center All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide. The last part is composed of the model won desktop and mobile.
        .Content-container(data-aos="fade-up")
          img.Content-main(src="~assets/images/BuddyBuddy/Laptop.png" alt="Laptop")
          img.Content-main(src="~assets/images/BuddyBuddy/Animation.gif" alt="Animation")
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Case study page
          p.Content-description.Text--center When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation.
        img.Content-full.Shadow(data-aos="fade-up" src="~assets/images/BuddyBuddy/Screen_1.png" alt="Screen 1")
        .Content-full
          img.Content-sub.Shadow(data-aos="fade-up" src="~assets/images/BuddyBuddy/Screen_2.png" alt="Screen 2")
          img.Content-sub.Shadow(data-aos="fade-up" src="~assets/images/BuddyBuddy/Screen_3.png" alt="Screen 3")
    section.Slide.Slide--block
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-left") Mobile
        .Content-item
          .Content-post(data-aos="fade-left")
            h4.Content-section Home
            p.Content-text All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide.
          img.Content-poster(data-aos="fade-left" data-aos-delay="250" src="~assets/images/BuddyBuddy/Home.png" alt="Home")
    .Intermediate(data-rate="20")
      .Intermediate-container
        .Content.Text--white
          .Content-item
            .Content-post.Exception--post(data-aos="fade-right")
              h4.Content-section Branding
              p.Content-text.Content-text--intermediate All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation.
            img.Content-poster(data-aos="fade-right" data-aos-delay="250" src="~assets/images/BuddyBuddy/Branding.png" alt="Branding")
    section.Slide.Exception--bottommore
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Mobile case study
          p.Content-description.Text--center When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation.
        Slider(
          folder="BuddyBuddy"
          :images="['Mobile_1', 'Mobile_2', 'Mobile_3', 'Mobile_4']"
        )
    section.Slide.Slide--banner.Exception--banner
      Banner.Banner--buddybuddy(src="BuddyBuddy/Banner_Screenshots" alt ="Banner Screenshots")
    section.Slide
      Article(
        :color="data.color"
        :post="data.posts[3]"
      )
  Footer(
    to="pocketcare"
    title="Pocketcare"
    color="green"
  )
</template>

<script>
import Header from '~/components/Header'
import Post from '~/components/Post'
import Color from '~/components/Color'
import Charter from '~/components/Charter'
import Article from '~/components/Article'
import Slider from '~/components/Slider'
import Banner from '~/components/Banner'
import Footer from '~/components/Footer'

export default {
  data() {
    return {
      data: {
        color: "red",
        shape: "square",
        posts: [
          {
            top: "What",
            center: "is the",
            bottom: "project ?",
            paragraphs: [
              "The purpose of this project was to redesign the agency's case study page, the most important page, visited mainly by clients.",
              "It was necessary especially to appropriate all the projects of the agency, to impregnate itself of the different graphic charters, branding, illustrations and models to then provide a clear and enriching case study."
            ]
          }, {
            top: "What",
            center: "was the",
            bottom: "problem ?",
            paragraphs: [
              "Appropriating projects was not necessarily the most complicated task, but it was the longest because Buddy Buddy has many projects to his credit despite his young age. It is especially the fact to realize a project with very square guidelines and in a very rigorous way which I liked and it was really interesting."
            ]
          }, {
            top: "How",
            center: "we",
            bottom: "solved it ?",
            paragraphs: [
              "I just had to informed myself and ask as many questions as possible to all members of the team. I made a lot of design watch and I choose the best trending websites and works of the moment. Then I tried to inspired myself and mix it the project content and the result is here."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "worked ?",
            paragraphs: [
              "I worked in pairs on this project with an Heticien comrade. We cut ourselves the project as well. First list the strong and weak points of the site to solve the weak points. Achieve a competitive benchmark but also on the agencies of the moment. Implement guidelines strict enough not to be in difficulty on the other boxes studios. And finally structure the project in large parts.",
              "Special thanks to Camille Pawlak as UX / UI designer and all the Buddy Buddy team witch helped me during this 4 months internship."
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
    Article,
    Slider,
    Banner,
    Footer
  },
  mounted() {
    const _body = document.body
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

      _headerMainnav.dataset.theme = color
      _logo.dataset.theme = color
    })

    window.addEventListener('mousemove', event => { mouse.y = event.clientY })
  },
  transition: {
    name: 'csdc',
    mode: 'out-in',
    enter(el, done) {
      document.body.style.pointerEvents = 'none'

      if (!this.$route.params.from) {
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
      } else if (this.$route.params.from.includes('projects-')) {
        TweenLite.fromTo('.Carousel-neon', 1, { scale: 0 }, { scale: 1, delay: 1, ease: Power2.easeInOut })
        TweenLite.fromTo('.Carousel-button', 1, { scale: 0 }, { scale: 1, delay: 1.5, ease: Power2.easeInOut })
        TweenLite.fromTo('.Carousel-layer', 1, { opacity: 0 }, { opacity: 1, delay: 2, ease: Power2.easeInOut })
        document.body.style.pointerEvents = 'auto'
        done()
      } else {
        document.body.style.pointerEvents = 'auto'
        done()
      }
    },
    leave(el, done) {
      document.body.style.pointerEvents = 'none'
      el.querySelector('.Logo').dataset.theme = 'white'
      el.querySelector('.Header-navigation').dataset.theme = 'white'
      el.querySelector('.Header-mainnav').dataset.theme = 'white'

      if (!this.$route.name.includes('projects-')) {
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
      } else if (this.$route.params.from) {
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
}
</script>
