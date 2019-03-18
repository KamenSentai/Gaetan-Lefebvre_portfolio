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
          p.Content-description.Text--center On the case study, we can find a short video of the project, with competencies used by the team and 3 navigations tools and the scroll.
        img.Content-main(data-aos="fade-up" src="~static/images/BuddyBuddy/Computer.png" alt="Computer")
    section.Slide.Slide--crossed
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center The case study
          p.Content-description.Content-description--large.Text--center All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide. The last part is composed of the model won desktop and mobile.
        .Content-container(data-aos="fade-up")
          img.Content-main(src="~static/images/BuddyBuddy/Laptop.png" alt="Laptop")
          img.Content-main(src="~static/images/BuddyBuddy/Animation.gif" alt="Animation")
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Case study page
          p.Content-description.Text--center The first section is split in 3 sections. The branding identity, then the style guide and finally the UI kit.
        img.Content-full.Shadow(data-aos="fade-up" src="~static/images/BuddyBuddy/Screen_1.png" alt="Screen 1")
        .Content-full
          img.Content-sub.Shadow(data-aos="fade-up" src="~static/images/BuddyBuddy/Screen_2.png" alt="Screen 2")
          img.Content-sub.Shadow(data-aos="fade-up" src="~static/images/BuddyBuddy/Screen_3.png" alt="Screen 3")
    section.Slide.Slide--block
      .Content
        .Content-header
          h3.Content-title(data-aos="fade-left") Mobile
        .Content-item
          .Content-post(data-aos="fade-left")
            h4.Content-section Home
            p.Content-text All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide.
          img.Content-poster(data-aos="fade-left" data-aos-delay="250" src="~static/images/BuddyBuddy/Home.png" alt="Home")
    .Intermediate(data-rate="20")
      .Intermediate-container
        .Content.Text--white
          .Content-item
            .Content-post.Exception--post(data-aos="fade-right")
              h4.Content-section Branding
              p.Content-text.Content-text--intermediate In this section, we are presenting the logo evolution of the project. Then we show the final logo version with its variations.
            img.Content-poster(data-aos="fade-right" data-aos-delay="250" src="~static/images/BuddyBuddy/Branding.png" alt="Branding")
    section.Slide.Exception--bottommore
      .Content
        .Content-header.Content-header--center(data-aos="fade-up")
          h3.Content-title.Text--center Mobile case study
          p.Content-description.Text--center The mobile part has several sliders to adapt the card system used for the desktop part.
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

import ProjectController from '~/assets/scripts/ProjectController'

export default {
  head () {
    return {
      title: 'Gaëtan LEFEBVRE | Buddy Buddy',
      meta: [
        { hid: 'description', name: 'description', content: 'During my last internship, I redesign the agency website to refresh it. I worked on desktop and mobile version.' }
      ]
    }
  },
  data() {
    return {
      data: {
        color: "red",
        shape: "square",
        posts: [
          {
            top: "What",
            center: "is the",
            bottom: "subject ?",
            paragraphs: [
              "The aim of this project was to redesign the agency’s case study page, the most important and visited by customers.",
              "It was necessary above all to know all the project of the agency, to learn the various graphic charters, branding, illustrations and models to provide a clear and enriching study box."
            ]
          }, {
            top: "What",
            center: "was the",
            bottom: "problem ?",
            paragraphs: [
              "Appropriating projects was not necessarily the most complicated task, but it was the longest because Buddy Buddy has many projects to his credit despite his young age.",
              "It is especially the fact to realize a project with very square guidelines and in a very rigorous way which I liked and it was really interesting."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "solved it ?",
            paragraphs: [
              "I just had to informed myself and ask as many questions as possible to all members of the team. I made a lot of design watch and I choose the best trending websites and works of the moment. Then I tried to inspired myself and mix it the project content and the result is here."
            ]
          }, {
            top: "How",
            center: "the team",
            bottom: "worked ?",
            paragraphs: [
              "I worked in pairs on this project with a fellow comrade. We divided ourselves on project as well. First of all, we listed the strong and weak points of the website to solve the weak points. Realise a competitive benchmark. Implementing guidelines, strict enough not to be in difficulty on the other studio boxes. And finally structure the project into major parts.",
              "Special thanks to Camille Pawlak as UX / UI designer and all the Buddy Buddy team which helped me during this 4 months internship."
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
