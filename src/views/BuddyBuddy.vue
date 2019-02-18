<template lang="pug">
div
  Header(:color="data.color" :shape="data.shape")
  .Page(v-bind:class="`Page--${data.color}`")
    section.Slide
      Post(
        :color="data.color"
        :post="data.posts[0]"
      )
    section.Slide
      .Content
        .Content-header
          h3.Content-title.Content-title--trailed Colors and typography
        .Content-table
          .Content-icons.Content-icons--half
            Color(color="#FF303F" :shape="data.shape")
            Color(color="#FFD6D9" :shape="data.shape")
            Color(color="#BDBDBD" :shape="data.shape")
            Color(color="#FFFFFF" :shape="data.shape")
          .Content-charters.Content-charters--half
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
        .Content-header.Content-header--center
          h3.Content-title.Text--center Case study home
          p.Content-description.Text--center We can find on the home page of the case study a short vidéo of the project, with the comptences used by the team and 3 navigations tools (previous and next project) and the scroll.
        img.Content-main(src="../assets/images/BuddyBuddy/Computer.png" alt="Computer")
    section.Slide.Slide--crossed
      .Content
        .Content-header.Content-header--center
          h3.Content-title.Text--center The case study
          p.Content-description.Content-description--large.Text--center All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide. The last part is composed of the model won desktop and mobile.
        .Content-container
          img.Content-main(src="../assets/images/BuddyBuddy/Laptop.png" alt="Laptop")
          img.Content-main(src="../assets/images/BuddyBuddy/Animation.gif" alt="Animation")
    section.Slide.Slide--page
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
      .Content
        .Content-header.Content-header--center
          h3.Content-title.Text--center Case study page
          p.Content-description.Text--center When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation.
          img.Content-full.Shadow(src="../assets/images/BuddyBuddy/Screen_1.png" alt="Screen 1")
          .Content-full
            img.Content-sub.Shadow(src="../assets/images/BuddyBuddy/Screen_2.png" alt="Screen 2")
            img.Content-sub.Shadow(src="../assets/images/BuddyBuddy/Screen_3.png" alt="Screen 3")
    section.Slide.Slide--block
      .Content
        .Content-header
          h3.Content-title Mobile
        .Content-item
          .Content-post
            h4.Content-section Home
            p.Content-text All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide.
          img.Content-poster(src="../assets/images/BuddyBuddy/Home.png" alt="Home")
    .Intermediate.Intermediate--20
      .Content.Text--white
        .Content-item
          .Content-post
            h4.Content-section Branding
            p.Content-text.Content-text--intermediate All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation.
          img.Content-poster(src="../assets/images/BuddyBuddy/Branding.png" alt="Branding")
    section.Slide
      .Content
        .Content-header.Content-header--center
          h3.Content-title.Text--center Mobile case study
          p.Content-description.Text--center When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation.
        Carousel(
          folder="BuddyBuddy"
          :images="['Mobile_1', 'Mobile_2', 'Mobile_3', 'Mobile_4']"
        )
    section.Slide.Slide--banner
      img.Content-banner(src="../assets/images/BuddyBuddy/Banner_Screenshots.png" alt="Banner Screenshots")
    section.Slide
      Article(
        :color="data.color"
        :post="data.posts[3]"
      )
  Footer(
    to="personal"
    title="Personal"
  )
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'
import Color from '../components/Color'
import Charter from '../components/Charter'
import Article from '../components/Article'
import Carousel from '../components/Carousel'
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
    Carousel,
    Footer
  }
}
</script>
