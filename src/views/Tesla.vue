<template lang="pug">
  div
    Header(color="blue" shape="triangle")
    .Page.Page--blue
      section.Slide
        Post(
          color="blue"
          top="What"
          center="is the"
          bottom="project ?"
          :paragraphs="data.what_is_the_project"
        )
      section.Slide
        .Content
          .Content-header
            h3.Content-title.Content-title--trailed Branding - Graphis charter
          .Content-suite
            .Content-icons.Content-icons--main
              img(src="../assets/images/Tesla/Logo_T.png" alt="T")
              img(src="../assets/images/Tesla/Logo_+.png" alt="+")
              img(src="../assets/images/Tesla/Logo_O.png" alt="O")
              img(src="../assets/images/Tesla/Logo_=.png" alt="=")
              img(src="../assets/images/Tesla/Logo_TO.png" alt="TO")
            .Content-icons
              Color(color="#228DFC" shape="triangle")
              Color(color="#1F1F1F" shape="triangle")
              Color(color="#A7A7A7" shape="triangle")
              Color(color="#FFFFFF" shape="triangle")
            .Content-charters
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
          color="blue"
          top="What"
          center="was the"
          bottom="problem ?"
          :paragraphs="data.what_was_the_problem"
        )
        .Content
          .Content-header
            h3.Content-title.Text--center Touchscreen
      section.Slide.Slide--block.Slide--bottomless
        .Content
          .Content-header.Content-header--center
            h3.Content-title.Text--center Inside the car
            p.Content-description.Content-description--large.Text--center The touchscreen is first of all the way to navigate and obtain all the informations about the Tesla Model 3. But it’s also the way to interact the the Oculus Rift for the passenger beside to the driver and the driver himself when the car is stopped.
        img(src="../assets/images/Tesla/Car.png" alt="Car")
      section.Slide.Slide--page
        Post(
          color="blue"
          top="How"
          center="I solved"
          bottom="it ?"
          :paragraphs="data.how_i_solved_it"
        )
        .Content
          .Content-header
            h3.Content-title Mobile app
          .Content-article
            .Content-post.Content-post--static.Content-post--quarter
              h4.Content-section Charge and navigation
              p.Content-text When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car.
              p.Content-text The navigation will tell you the distance of the car and the localisation. You will also have an AR view of the street.
      section.Slide
        .Content
          .Content-article.Content-article--alternation
            .Content-post.Content-post--static.Content-post--half
              h4.Content-section Charge and navigation
              p.Content-text When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car.
              p.Content-text The navigation will tell you the distance of the car and the localisation. You will also have an AR view of the street.
            .Content-alternated
              img.Content-intern(src="../assets/images/Tesla/Phone_1.png" alt="Phone 1")
              img.Absolute.Absolute--p11(src="../assets/images/Tesla/Phone_1-overflow_1.png" alt="")
              img.Absolute.Absolute--p12(src="../assets/images/Tesla/Phone_1-overflow_2.png" alt="")
              img.Absolute.Absolute--p13(src="../assets/images/Tesla/Phone_1-overflow_3.png" alt="")
            .Content-alternated
              img.Content-intern(src="../assets/images/Tesla/Phone_2.png" alt="Phone 2")
              img.Absolute.Absolute--p23(src="../assets/images/Tesla/Phone_2-overflow_3.png" alt="")
              img.Absolute.Absolute--p22(src="../assets/images/Tesla/Phone_2-overflow_2.png" alt="")
              img.Absolute.Absolute--p21(src="../assets/images/Tesla/Phone_2-overflow_1.png" alt="")
            .Content-alternated
              img.Content-intern(src="../assets/images/Tesla/Phone_3.png" alt="Phone 3")
          .Content-article
            .Content-post.Content-post--static.Content-post--half
              h4.Content-section Inside the Oculus
              p.Content-text Finally, you can find here the charging part. Then the localisation, same as the mobile part to find the car. And the little option to bring the car forward or backward in some specials situations.
          img.Content-full(src="../assets/images/Tesla/Hands.png" alt="Hands")
      .Intermediate.Intermediate--20
        img.Content-breakpoints(src="../assets/images/Tesla/Helmet.png" alt="Helmet")
      section.Slide.Slide--page
        Post(
          color="blue"
          top="Why"
          center="that"
          bottom="project ?"
          :paragraphs="data.why_that_project"
        )
        .Content
          .Content-header
            h3.Content-title Watch and features
          .Content-article
            img.Content-flyer(src="../assets/images/Tesla/Watch.gif" alt="Watch")
            .Content-post.Content-post--static.Content-post--half
              h4.Content-section Oculus immersion
              p.Content-text When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car. After you can start the navigation to return to the car.
      section.Slide.Slide--block
        .Content
          .Content-header.Content-header--center
            h3.Content-title.Text--center Other screens
            p.Content-description.Text--center Finally, you can find here the charging part. Then the localisation, same as the mobile part to find the car. And the little option to bring the car forward or backward in some specials situations.
      .Intermediate.Intermediate--10
        img.Content-banner(src="../assets/images/Tesla/Watches.png" alt="Watches")
      section.Slide
        Article(
          color="blue"
          top="How"
          center="the team"
          bottom="worked ?"
          v-bind:paragraphs="data.how_the_team_worked"
        )
    Footer(
      to="buddy-buddy"
      title="Buddy Buddy"
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
    titleTemplate: '%s | Tesla',
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
