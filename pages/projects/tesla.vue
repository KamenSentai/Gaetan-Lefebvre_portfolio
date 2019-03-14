<template lang="pug">
div
  Header(
    :color="data.color"
    :shape="data.shape"
    :hasProject="false"
    :hasAbout="true"
    :hasHome="false"
    jumbotron="carousel"
    slide="1"
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
          h3.Content-title.Content-title--trailed(data-aos="fade-left") Branding - Graphic charter
        .Content-suite
          .Content-icons.Content-icons--main(data-aos="fade-left")
            img(src="~assets/images/Tesla/Logo_T.png" alt="T")
            img(src="~assets/images/Tesla/Logo_+.png" alt="+")
            img(src="~assets/images/Tesla/Logo_O.png" alt="O")
            img(src="~assets/images/Tesla/Logo_=.png" alt="=")
            img(src="~assets/images/Tesla/Logo_TO.png" alt="TO")
          .Content-icons(data-aos="fade-left")
            Color(color="#228DFC" :shape="data.shape")
            Color(color="#1F1F1F" :shape="data.shape")
            Color(color="#A7A7A7" :shape="data.shape")
            Color(color="#FFFFFF" :shape="data.shape")
          .Content-charters(data-aos="fade-left")
            Charter.Content-charter(
              name="Oculus Sans Bold"
              font="OculusSans-Bold"
            )
            Charter.Content-charter(
              name="Oculus Sans Regular"
              font="OculusSans-Regular"
            )
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[1]"
      )
      .Content
        .Content-header
          h3.Content-title.Text--center(data-aos="fade-up") Touchscreen
        .Field
          Slider.Slider--full(
            folder="Tesla"
            :images="[`Tablet_${slider_theme}_1`, `Tablet_${slider_theme}_2`, `Tablet_${slider_theme}_3`, `Tablet_${slider_theme}_4`, `Tablet_${slider_theme}_5`, `Tablet_${slider_theme}_6`]"
            mockup="Tablet_mockup"
            automatic="true"
            interval="5000"
            :color="data.color"
          )
          .Field-inputs(data-aos="fade-up")
            input(type="radio" id="black" v-model="slider_theme" value="black")
            label.Field--black(for="black") Dark theme
            input(type="radio" id="white" v-model="slider_theme" value="white")
            label(v-bind:class="`Field--${data.color}`" for="white") Light theme
    section.Slide.Slide--block.Exception--bottomless
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Inside the car
          p.Content-description.Content-description--large.Text--center The touchscreen is first of all the way to navigate and obtain all the informations about the Tesla Model 3. But it’s also the way to interact the the Oculus Rift for the passenger beside to the driver and the driver himself when the car is stopped.
      img.Exception--car(src="~assets/images/Tesla/Car.png" alt="Car")
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-left") Mobile app
        .Content-article
          .Content-post.Content-post--static.Content-post--quarter(data-aos="fade-left")
            h4.Content-section Charge and navigation
            p.Content-text When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car.
            p.Content-text The navigation will tell you the distance of the car and the localisation. You will also have an AR view of the street.
          Slider.Slider--item(
            data-aos-delay="250"
            folder="Tesla"
            :images="['Mobile_1', 'Mobile_2', 'Mobile_3', 'Mobile_4', 'Mobile_5', 'Mobile_6', 'Mobile_7', 'Mobile_8']"
            mockup="Mobile_mockup"
            automatic="true"
            interval="5000"
            :color="data.color"
          )
    section.Slide
      .Content
        .Content-article.Content-article--alternation
          .Content-post.Content-post--static.Content-post--half(data-aos="fade-up")
            h4.Content-section Charge and navigation
            p.Content-text When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car.
            p.Content-text The navigation will tell you the distance of the car and the localisation. You will also have an AR view of the street.
          .Content-alternated.is-inactive
            .Content-group(data-aos="fade-up")
              img.Content-intern(src="~assets/images/Tesla/Phone_1.png" alt="Phone 1")
              img.Absolute.Absolute--p11(src="~assets/images/Tesla/Phone_1-overflow_1.png" alt="")
              img.Absolute.Absolute--p12(src="~assets/images/Tesla/Phone_1-overflow_2.png" alt="")
              img.Absolute.Absolute--p13(src="~assets/images/Tesla/Phone_1-overflow_3.png" alt="")
          .Content-alternated.is-inactive
            .Content-group(data-aos="fade-up")
              img.Content-intern(src="~assets/images/Tesla/Phone_2.png" alt="Phone 2")
              img.Absolute.Absolute--p23(src="~assets/images/Tesla/Phone_2-overflow_3.png" alt="")
              img.Absolute.Absolute--p22(src="~assets/images/Tesla/Phone_2-overflow_2.png" alt="")
              img.Absolute.Absolute--p21(src="~assets/images/Tesla/Phone_2-overflow_1.png" alt="")
          .Content-alternated.is-inactive
            .Content-group(data-aos="fade-up")
              img.Content-intern(src="~assets/images/Tesla/Phone_3.gif" alt="Phone 3")
        .Content-article
          .Content-post.Content-post--static.Content-post--half(data-aos="fade-up")
            h4.Content-section Inside the Oculus
            p.Content-text Finally, you can find here the charging part. Then the localisation, same as the mobile part to find the car. And the little option to bring the car forward or backward in some specials situations.
        .Content-full.Content-full--online
          img.Content-online(data-aos="fade-up" data-aos-delay="0" src="~assets/images/Tesla/Hand_1.png" alt="Hand")
          img.Content-online(data-aos="fade-up" data-aos-delay="250" src="~assets/images/Tesla/Hand_2.png" alt="Hand")
          img.Content-online(data-aos="fade-up" data-aos-delay="500" src="~assets/images/Tesla/Hand_3.png" alt="Hand")
          img.Content-online(data-aos="fade-up" data-aos-delay="750" src="~assets/images/Tesla/Hand_4.png" alt="Hand")
          img.Content-online(data-aos="fade-up" data-aos-delay="1000" src="~assets/images/Tesla/Hand_5.png" alt="Hand")
    .Intermediate(data-rate="20")
      .Intermediate-container(data-aos="fade-up")
        img.Content-breakpoints(src="~assets/images/Tesla/Helmet.png" alt="Helmet")
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[3]"
      )
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-left") Watch and features
        .Content-article
          img.Content-flyer(data-aos="fade-left" src="~assets/images/Tesla/Watch.gif" alt="Watch")
          .Content-post.Content-post--static.Content-post--half(data-aos="fade-right")
            h4.Content-section Oculus immersion
            p.Content-text When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car. After you can start the navigation to return to the car.
    section.Slide.Slide--block
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Other screens
          p.Content-description.Text--center Finally, you can find here the charging part. Then the localisation, same as the mobile part to find the car. And the little option to bring the car forward or backward in some specials situations.
    .Intermediate(data-rate="20")
      .Intermediate-container(data-aos="fade-up")
        img.Content-banner(src="~assets/images/Tesla/Watches_1.png" alt="Watches")
      .Intermediate-container(data-aos="fade-up")
        img.Content-banner(src="~assets/images/Tesla/Watches_2.png" alt="Watches")
    section.Slide
      Article(
        :color="data.color"
        :post="data.posts[4]"
      )
  Footer(
    to="buddy-buddy"
    title="Buddy Buddy"
  )
</template>

<script>
import Header from '~/components/Header'
import Post from '~/components/Post'
import Color from '~/components/Color'
import Charter from '~/components/Charter'
import Article from '~/components/Article'
import Slider from '~/components/Slider'
import Footer from '~/components/Footer'

export default {
  data() {
    return {
      data: {
        color: "blue",
        shape: "triangle",
        posts: [
          {
            top: "What",
            center: "is the",
            bottom: "project ?",
            paragraphs: [
              "This project is quite special since it consisted in finding a partnership with the Tesla brand to communicate on its latest model, the Tesla Model 3. The objective was to realize several scenarios through 3 supports: the Tesla tablet, the mobile and the watch. It was both inspired by the Tesla charter while combining with the brand chosen by our team.",
              "And we ended up choosing Oculus integrating a VR experience inside the vehicle. I'll let you discover more."
            ]
          }, {
            top: "What",
            center: "was the",
            bottom: "problem ?",
            paragraphs: [
              "Creating a consistent product on 3 different media was certainly the most complex task. We worked in teams of 2 for each medium, except the Watch which only required one person. Above all, it was necessary to take into account the graphic charters of both brands without letting one of them dominate.",
              "And the main problem was to create into the vehicle interactions with the oculus product without hurting people in the car."
            ]
          }, {
            top: "How",
            center: "I solved",
            bottom: "it ?",
            paragraphs: [
              "Communication first and foremost. Each step was seen and reviewed by each member of the team. As for the final graphic charter, I realized with my partner on the mobile version. It was later declined on other media.",
              "It was necessary to think and imagine how VR would settle in a vehicle. So we also decided to use a type of Oculus gloves that passengers will use during their experiences to navigate without problems."
            ]
          }, {
            top: "Why",
            center: "that",
            bottom: "project ?",
            paragraphs: [
              "It is certainly the project where I learned the most, and which amused me the most. It was necessary to think and imagine how VR would settle in a vehicle. It was a very interesting phase of reflection where each member of the team was able to propose ideas."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "worked ?",
            paragraphs: [
              "We were 5 on this project. 2 people on the tablet part, 2 on the mobile part and finally 1 on the watch. For my part I worked continuously with a friend for the mobile part. We were able to iterate on the Watch part.",
              "What I liked a lot was also the prototype phase and especially the discovery of a way to visualize his Sketch models in VR, a task that required a lot of time and research.",
              "Special thanks to Gabriel Duret, Marina Ferreira Duarte, Clara Foggetti and Thomas Hénault as UX / UI designer and Marina for helping me  for the prototypes."
            ]
          }
        ]
      },
      slider_theme: 'black'
    }
  },
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
    const _alternatedsContent = Array.from(this.$el.querySelectorAll('.Content-alternated'))

    for (const _alternatedContent of _alternatedsContent) {
      const _groupContent = _alternatedContent.querySelector('.Content-group')

      const listenScroll = () => {
        if (_groupContent.classList.contains('aos-animate')) {
          _alternatedContent.classList.remove('is-inactive')
          window.removeEventListener('scroll', listenScroll)
        } else {
          window.addEventListener('scroll', listenScroll)
        }
      }
      listenScroll()
    }

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
