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

  .Page(:data-color="data.color")
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
          .Content-icons.Content-icons--main.Lazyload(data-aos="fade-left")
            img(src="~assets/images/Tesla/Logo_T.png" alt="Tesla logo")
            .Symbol.Symbol--plus
            img(src="~assets/images/Tesla/Logo_O.png" alt="Oculus logo")
            .Symbol.Symbol--equal
            img(src="~assets/images/Tesla/Logo_TO.png" alt="Tesla X Oculus logo")
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
            :images="[{ src: `Tablet_${slider_theme}_1`, alt: `Touchscreen ${slider_theme} map` }, { src: `Tablet_${slider_theme}_2`, alt: `Touchscreen ${slider_theme} road` }, { src: `Tablet_${slider_theme}_3`, alt: `Touchscreen ${slider_theme} search` }, { src: `Tablet_${slider_theme}_4`, alt: `Touchscreen ${slider_theme} navigation` }, { src: `Tablet_${slider_theme}_5`, alt: `Touchscreen ${slider_theme} celsius` }, { src: `Tablet_${slider_theme}_6`, alt: `Touchscreen ${slider_theme} module` }]"
            :mockup="{ src: 'Tablet_mockup', alt: 'Touchscreen mockup' }"
            automatic="true"
            interval="5000"
            :color="data.color"
          )
          .Field-inputs(data-aos="fade-up")
            input.Cursor-frame--reduced(type="radio" id="black" v-model="slider_theme" value="black")
            label.Cursor-frame--reduced.Field--black(for="black") Dark theme
            input.Cursor-frame--reduced(type="radio" id="white" v-model="slider_theme" value="white")
            label.Cursor-frame--reduced(v-bind:class="`Field--${data.color}`" for="white") Light theme

    section.Slide.Slide--block.Exception--bottomless.Lazyload
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Inside the car
          p.Content-description.Content-description--large.Text--center The touchscreen is first of all the way to navigate and obtain all the informations about the Tesla Model 3. But it’s also the way to interact with the Oculus Rift for the passenger beside the driver and the driver himself when the car is stopped.
      img.Exception--car(src="~assets/images/Tesla/Car.png" alt="Tesla touchscreen interior")

    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-left") Mobile app
        .Content-article
          .Content-post.Content-post--static.Content-post--quarter.Exception--autoheight(data-aos="fade-left")
            h4.Content-section Charge and navigation
            p.Content-text When the Tesla is 100% charged, you will receive a notification to alert you. After you can start the navigation to return to the car.
            p.Content-text The navigation will tell you the distance of the car and the localisation. You will also have an AR view of the street.
          Slider.Slider--item(
            data-aos-delay="250"
            folder="Tesla"
            :images="[{ src: 'Mobile_1', alt: 'Mobile car full energy' }, { src: 'Mobile_2', alt: 'Mobile car lock' }, { src: 'Mobile_3', alt: 'Mobile car unlock' }, { src: 'Mobile_4', alt: 'Mobile car scan' }, { src: 'Mobile_5', alt: 'Mobile car AR' }, { src: 'Mobile_6', alt: 'Mobile car map' }, { src: 'Mobile_7', alt: 'Mobile car settings' }, { src: 'Mobile_8', alt: 'Mobile car energy' }]"
            :mockup="{ src: 'Mobile_mockup', alt: 'iPhone X mockup' }"
            automatic="true"
            interval="5000"
            :color="data.color"
          )

    section.Slide
      .Content
        .Content-article.Content-article--alternation
          .Content-post.Content-post--static.Content-post--half.Exception--autoheight(data-aos="fade-up")
            h4.Content-section Game mode
            p.Content-text The particularity of this partnership: the Oculus experience. We are now immersed in it. To begin, we must choose our experience.
            p.Content-text Subsequently, we choose the number of members. Onboarding will then tell us to equip ourselves properly (helmets, media and gloves).
          .Content-alternated.is-inactive
            .Content-object.Lazyload(data-aos="fade-up")
              img.Content-intern(src="~assets/images/Tesla/Phone_1.png" alt="Phone immersion page")
              img.Absolute.Absolute--p11(src="~assets/images/Tesla/Phone_1-overflow_1.png" alt="Immersion card game")
              img.Absolute.Absolute--p12(src="~assets/images/Tesla/Phone_1-overflow_2.png" alt="Immersion card landscape")
              img.Absolute.Absolute--p13(src="~assets/images/Tesla/Phone_1-overflow_3.png" alt="Immersion card draw")
          .Content-alternated.is-inactive
            .Content-object.Lazyload(data-aos="fade-up")
              img.Content-intern(src="~assets/images/Tesla/Phone_2.png" alt="Phone description game")
              img.Absolute.Absolute--p21(src="~assets/images/Tesla/Phone_2-overflow_1.png" alt="Game card 1")
              img.Absolute.Absolute--p22(src="~assets/images/Tesla/Phone_2-overflow_2.png" alt="Game card 2")
              img.Absolute.Absolute--p23(src="~assets/images/Tesla/Phone_2-overflow_3.png" alt="Game card 3")
          .Content-alternated.is-inactive
            .Content-object(data-aos="fade-up")
              video.Content-intern(autoplay muted loop src="~assets/images/Tesla/Phone_3.mp4")
        .Content-article
          .Content-post.Content-post--static.Content-post--half(data-aos="fade-up")
            h4.Content-section Oculus in your hand
            p.Content-text With VR, we decided to use gloves to manipulate the Oculus immersion in the Tesla. After, by using the helmet and different sensors located in the binacle, you can finally start the experience.
        .Content-fullline.Lazyload
          .Content-online(data-aos="fade-up" data-aos-delay="0")
            img(src="~assets/images/Tesla/Hand_1.png" alt="Hand view 1")
          .Content-online(data-aos="fade-up" data-aos-delay="250")
            img(src="~assets/images/Tesla/Hand_2.png" alt="Hand view 2")
          .Content-online(data-aos="fade-up" data-aos-delay="500")
            img(src="~assets/images/Tesla/Hand_3.png" alt="Hand view 3")
          .Content-online(data-aos="fade-up" data-aos-delay="750")
            img(src="~assets/images/Tesla/Hand_4.png" alt="Hand view 4")
          .Content-online(data-aos="fade-up" data-aos-delay="1000")
            img(src="~assets/images/Tesla/Hand_5.png" alt="Hand view 5")

    .Intermediate(data-rate="20")
      .Intermediate-container.Lazyload(data-aos="fade-up")
        img.Content-breakpoints(src="~assets/images/Tesla/Helmet.png" alt="Oculus Helmet")

    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[3]"
      )
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-left") Watch and features
        .Content-article
          video.Content-flyer(autoplay muted loop data-aos="fade-left" src="~assets/images/Tesla/Watch.mp4")
          .Content-post.Content-post--static.Content-post--half(data-aos="fade-right")
            h4.Content-section Oculus immersion
            p.Content-text Here we are now in the Oculus experience. In this one, we can choose a landscape using the wheel of the watch and plunge us into a dream while we are driving.

    section.Slide.Slide--block
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Other screens
          p.Content-description.Text--center We can finally find all our mobile features on our watch: loading, moving the car, unlocking the car, the map with the route and the Oculus experience.

    .Intermediate.Lazyload(data-rate="20")
      .Intermediate-container(data-aos="fade-up")
        img.Content-banner(src="~assets/images/Tesla/Watches_1.png" alt="Watch line other screen first")
      .Intermediate-container(data-aos="fade-up")
        img.Content-banner(src="~assets/images/Tesla/Watches_2.png" alt="Watch line other screen second")

    section.Slide
      Article(
        :color="data.color"
        :post="data.posts[4]"
      )

  Footer(
    to="buddy-buddy"
    title="Buddy Buddy"
    color="red"
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

import ProjectController from '~/assets/scripts/ProjectController'

export default {
  head() {
    return {
      title: 'Gaëtan LEFEBVRE | Tesla',
      meta: [
        { hid: 'description', name: 'description', content: 'Tesla X Oculus Rift was to create a VR experience inside the car. The goal was to realize several scenarios through 3 supports: the Tesla tablet, the mobile app and the watch.' }
      ]
    }
  },

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
              "This project is quite special because it consisted in finding a partnership with the brand Tesla to communicate on its latest model, the Tesla Model 3. The objective was to achieve several scenarios through 3 supports: the Tesla tablet, the mobile and the watch. It was necessary to both be inspired of the Tesla charter while combining with the brand charter we chose.",
              "And we ended up choosing Oculus, incorporating a VR experience inside the vehicle. I will let you discover more."
            ]
          }, {
            top: "What",
            center: "was the",
            bottom: "problem ?",
            paragraphs: [
              "Creating a consistent product on 3 different media was certainly the most complex task. We worked in teams of 2 for each part, except for the Watch that required only one person. It was mainly necessary to take into account the graphic charters of the 2 marks without letting one of them dominate.",
              "And the main problem was to create interactions into the vehicle with the Oculus product without hurting people in the car."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "solved it ?",
            paragraphs: [
              "Communication first. Each step was seen and reviewed by each team member. As for the final graphic charter, I realized it with my duo on the mobile version. It was subsequently declined on the other parts.",
              "It was necessary to think and imagine how VR would settle in a vehicle. So we also decided to use Oculus gloves that passengers will use during their experiences to navigate without problems."
            ]
          }, {
            top: "Why",
            center: "that",
            bottom: "project ?",
            paragraphs: [
              "It was certainly the project where I learned the most, and that entertained me the most. We had to think and imagine how the VR would fit into a vehicle.",
              "It was a very thought intensive phase where each team member has been able to propose different ideas."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "worked ?",
            paragraphs: [
              "We were 5 on this project. 2 people on the tablet part, 2 on the mobile part and finally 1 on watch. For my part I worked continuously with a comrade for the mobile part. We were able to iterate on the Watch part.",
              "What I really liked was also the prototype phase and especially discovering a way to visualize its Sketch models in VR, a task that asked me a lot of time and research.",
              "Special thanks to Gabriel Duret, Marina Ferreira Duarte, Clara Foggetti and Thomas Hénault as UX / UI designer and Marina for helping me for the prototypes."
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
    new ProjectController(this).init()
  },

  transition: {
    name: 'project',
    mode: 'out-in',
    enter(el, done) {
      new ProjectController(this).enter(el, done)
    },
    leave(el, done) {
      new ProjectController(this).leave(el, done)
    }
  }
}
</script>
