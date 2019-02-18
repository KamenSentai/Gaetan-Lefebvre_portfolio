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
            Color(color="#00D6CF" :shape="data.shape")
            Color(color="#FFCB4A" :shape="data.shape")
            Color(color="#4A4A4A" :shape="data.shape")
            Color(color="#D3D3D3" :shape="data.shape")
          .Content-charters.Content-charters--half
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
          h3.Content-title.Text--center Onboarding
        .Content-listing
          img.Shadow(src="../assets/images/Pocketcare/Onboarding_1.png" alt="Onboarding")
          img.Shadow(src="../assets/images/Pocketcare/Onboarding_2.png" alt="Onboarding")
          img.Shadow(src="../assets/images/Pocketcare/Onboarding_3.png" alt="Onboarding")
      Post(
        :color="data.color"
        :post="data.posts[2]"
      )
    section.Slide.Slide--banner
      img.Content-banner(src="../assets/images/Pocketcare/Banner_Inscription.png" alt="Inscription")
    section.Slide.Slide--page
      .Content
        .Content-header
          h3.Content-title Cards and prescriptions
        .Content-item
          .Content-post
            h4.Content-section Step 1
            p.Content-text To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand. We then thought it would be a good idea.
          img.Content-poster(src="../assets/images/Pocketcare/Phone_1.gif" alt="Phone animation 1")
        .Content-item
          .Content-post
            h4.Content-section Step 2
            p.Content-text To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand.
          img.Content-poster(src="../assets/images/Pocketcare/Phone_2.gif" alt="Phone animation 2")
    section.Slide.Slide--block
      .Content
        .Content-header.Content-header--center
          h3.Content-title.Text--center Profil and settings
          p.Content-description.Text--center To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand.
    .Intermediate.Intermediate--20
      img.Content-banner(src="../assets/images/Pocketcare/Screens.png" alt="Screens")
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
import Header from '../components/Header'
import Post from '../components/Post'
import Color from '../components/Color'
import Charter from '../components/Charter'
import Article from '../components/Article'
import Footer from '../components/Footer'

export default {
  metaInfo: {
    titleTemplate: '%s | Pocketcare',
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
    Footer
  }
}
</script>
