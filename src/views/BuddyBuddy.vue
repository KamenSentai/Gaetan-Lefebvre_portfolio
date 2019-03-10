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
        img.Content-main(data-aos="fade-up" src="../assets/images/BuddyBuddy/Computer.png" alt="Computer")
    section.Slide.Slide--crossed
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center The case study
          p.Content-description.Content-description--large.Text--center All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide. The last part is composed of the model won desktop and mobile.
        .Content-container(data-aos="fade-up")
          img.Content-main(src="../assets/images/BuddyBuddy/Laptop.png" alt="Laptop")
          img.Content-main(src="../assets/images/BuddyBuddy/Animation.gif" alt="Animation")
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Case study page
          p.Content-description.Text--center When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation.
        img.Content-full.Shadow(data-aos="fade-up" src="../assets/images/BuddyBuddy/Screen_1.png" alt="Screen 1")
        .Content-full
          img.Content-sub.Shadow(data-aos="fade-up" src="../assets/images/BuddyBuddy/Screen_2.png" alt="Screen 2")
          img.Content-sub.Shadow(data-aos="fade-up" src="../assets/images/BuddyBuddy/Screen_3.png" alt="Screen 3")
    section.Slide.Slide--block
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-left") Mobile
        .Content-item
          .Content-post(data-aos="fade-left")
            h4.Content-section Home
            p.Content-text All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide.
          img.Content-poster(data-aos="fade-left" data-aos-delay="250" src="../assets/images/BuddyBuddy/Home.png" alt="Home")
    .Intermediate(data-rate="20")
      .Intermediate-container
        .Content.Text--white
          .Content-item
            .Content-post.Exception--post(data-aos="fade-right")
              h4.Content-section Branding
              p.Content-text.Content-text--intermediate All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation.
            img.Content-poster(data-aos="fade-right" data-aos-delay="250" src="../assets/images/BuddyBuddy/Branding.png" alt="Branding")
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
      img.Content-banner(src="../assets/images/BuddyBuddy/Banner_Screenshots.png" alt="Banner Screenshots")
    section.Slide
      Article(
        :color="data.color"
        :post="data.posts[3]"
      )
  Footer(
    to="pocketcare"
    title="Pocketcare"
  )
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'
import Color from '../components/Color'
import Charter from '../components/Charter'
import Article from '../components/Article'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default {
  metaInfo: {
    titleTemplate: '%s | Buddy buddy',
    meta: [
      { name: 'description', content: '' }
    ]
  },
  props: [
    'data'
  ],
  components: {
    Header,
    Post,
    Color,
    Charter,
    Article,
    Slider,
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

      if (index !== undefined) color = index % 2 ? 'black' : 'white'
      else color = 'white'

      _mouse.dataset.color = color
      window.requestAnimationFrame(toggleCursor)
    }
    toggleCursor()
  }
}
</script>
