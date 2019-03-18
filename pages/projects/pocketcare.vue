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
          img.Shadow(data-aos="fade-left" data-aos-delay="0" src="~static/images/Pocketcare/Onboarding_1.png" alt="Onboarding")
          img.Shadow(data-aos="fade-left" data-aos-delay="250" src="~static/images/Pocketcare/Onboarding_2.png" alt="Onboarding")
          img.Shadow(data-aos="fade-left" data-aos-delay="500" src="~static/images/Pocketcare/Onboarding_3.png" alt="Onboarding")
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
    section.Slide.Slide--banner.Lazyload
      Banner.Banner--pocketcare(src="Pocketcare/Banner_Inscription" alt ="Inscription")
    section.Slide.Slide--page
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-up") Cards and prescriptions
        .Content-item
          .Content-post(data-aos="fade-left")
            h4.Content-section Step 1
            p.Content-text We can choose our profile by the burger menu. Then you need to click on the “Carte vitale” to settle your session at the doctor with the help of a reader and the operation is over.
          img.Content-poster(data-aos="fade-left" data-aos-delay="250" src="~static/images/Pocketcare/Phone_1.gif" alt="Phone animation 1")
        .Content-item
          .Content-post.Exception--post(data-aos="fade-right")
            h4.Content-section Step 2
            p.Content-text After your session, you can find your order, and have it scanned in pharmacy to receive the treatment and pay directly by using your phone.
          img.Content-poster(data-aos="fade-right" data-aos-delay="250" src="~static/images/Pocketcare/Phone_2.gif" alt="Phone animation 2")
    section.Slide.Slide--block
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Profil and settings
          p.Content-description.Text--center Finally, 2 sections dedicated to the profile section and the application settings with the possibility to modify your profile.
    .Intermediate(data-rate="20")
      .Intermediate-container.Lazyload
        img.Exception--screens(src="~static/images/Pocketcare/Screens.png" alt="Screens")
    section.Slide
      Article(
        :color="data.color"
        :post="data.posts[3]"
      )
  Footer(
    to="tesla"
    title="Tesla"
    color="blue"
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

import ProjectController from '~/assets/scripts/ProjectController'

export default {
  head () {
    return {
      title: 'Gaëtan LEFEBVRE | Pocketcare',
      meta: [
        { hid: 'description', name: 'description', content: 'The goal was to redesign an innovative solution for the medical field. The team worked on UX and UI phases to realized the final prototype.' }
      ]
    }
  },
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
              "Pocketcare was born from a student project. The aim was to design an innovative solution concerning the medical field.",
              "After several interviews, we noticed a problem with prescription loss. Moreover, we found that the “Carte Vital” and the mutual card could be used in a more effective way. Pocketcare is therefore the solution to these problems."
            ]
          }, {
            top: "What",
            center: "was the",
            bottom: "problem ?",
            paragraphs: [
              "The major problem has been to design an easy-to-access application for all members of a family.",
              "Knowing that it uses documents that are not necessarily simple like the “Carte Vital” or prescriptions. The entire process for registering a card was also rather complicated."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "solved it ?",
            paragraphs: [
              "To solve the problem of complexity of the application, we realized an “on Boarding simple” with dynamic illustrations easy to understand.",
              "We then found judicious to rework the cards and let the validations icons speak for themselves for the card registration phase."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "worked ?",
            paragraphs: [
              "We worked in a team of 6 on this project. The whole team  participated in the UX phase, where we listed different personas. Subsequently, we went through 2 phases of wireframes, low and high-fie.",
              "Then, 3 of us worked on the UI by cutting the project into 3 main parts, namely, on Boarding and registration, card and prescription registration and profile part.",
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
