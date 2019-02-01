<template lang="pug">
  div
    Header(color="green")
    section.Slide
      Post(
        color="green"
        top="What"
        center="is the"
        bottom="project ?"
        v-bind:paragraphs="data.what_is_the_project"
      )
    section.Slide
      .Content
        .Content-header
          h3.Content-title.Content-title--trailed Colors and typography
        .Content-table
          .Content-icons.Content-icons--half
            CircleIcon(color="#00D6CF")
            CircleIcon(color="#FFCB4A")
            CircleIcon(color="#4A4A4A")
            CircleIcon(color="#D3D3D3")
          .Content-charters.Content-charters--half
            Charter(
              name="Circular Std Bold"
              font="CircularStdBold"
            )
            Charter(
              name="Circular Std Book"
              font="CircularStdBook"
            )
    section.Slide.Slide--page
      Post(
        color="green"
        top="What"
        center="was the"
        bottom="problem ?"
        v-bind:paragraphs="data.what_was_the_problem"
      )
      .Content
        .Content-header
          h3.Content-title.Text--center Onboarding
        .Content-table
          img(src="../assets/images/Pocketcare/Onboarding_1.png" alt="Onboarding")
          img(src="../assets/images/Pocketcare/Onboarding_2.png" alt="Onboarding")
          img(src="../assets/images/Pocketcare/Onboarding_3.png" alt="Onboarding")
      Post(
        color="green"
        top="How"
        center="the team"
        bottom="solved it ?"
        v-bind:paragraphs="data.how_i_solved_it"
      )
    section.Slide.Slide--full
      img(src="../assets/images/Pocketcare/Banner_Inscription.png" alt="Inscription")
    section.Slide.Slide--page
      .Content
        .Content-header
          h3.Content-title Cards and prescriptions
        .Content-item
          .Content-elements
            h4.Content-section Step 1
            p.Content-text To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand. We then thought it would be a good idea.
          img(src="../assets/images/Pocketcare/Phone_1.gif" alt="Phone animation 1")
        .Content-item
          .Content-elements
            h4.Content-section Step 2
            p.Content-text To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand.
          img(src="../assets/images/Pocketcare/Phone_2.gif" alt="Phone animation 2")
    section.Slide.Slide--block
      .Content
        .Content-header.Content-header--center
          h3.Content-title.Text--center Profil and settings
          p.Content-description.Text--center To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand.
    .Intermediate.Intermediate--20
      img(src="../assets/images/Pocketcare/Screens.png" alt="Screens")
    section.Slide
      Article(
        color="green"
        top="How"
        center="the team"
        bottom="worked ?"
        v-bind:paragraphs="data.how_the_team_worked"
      )
    Footer(
      left="personal"
      project="pocketcare"
      right="tesla"
    )
</template>

<script>
import Header from '../components/Header'
import Post from '../components/Post'
import CircleIcon from '../components/CircleIcon'
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
    CircleIcon,
    Charter,
    Article,
    Footer
  }
}
</script>
