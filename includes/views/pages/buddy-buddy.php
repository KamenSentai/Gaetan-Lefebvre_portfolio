<?php include $dir . 'layouts/header.php'; ?>
<section class="Slide Slide--light">
  <?php
  $post = [
    'title' => [
      'top' => 'What',
      'center' => 'is the',
      'bottom' => 'project ?',
    ],
    'paragraphs' => [
      'The purpose of this project was to redesign the agency\'s case study page, the most important page, visited mainly by clients.',
      'It was necessary especially to appropriate all the projects of the agency, to impregnate itself of the different graphic charters, branding, illustrations and models to then provide a clear and enriching case study.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
</section>
<!-- <section class="Slide Slide--dark">
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title Part-title--trailed Text--white">Colors and typography</h3>
    </div>
  </div>
</section> -->
<!-- <img src="<?= IMAGES_URL ?>CTbb.png" alt=""> -->
<!--  -->
<section class="Slide Slide--light Slide--page">
  <?php
  $post = [
    'title' => [
      'top' => 'What',
      'center' => 'was the',
      'bottom' => 'problem ?',
    ],
    'paragraphs' => [
      'Appropriating projects was not necessarily the most complicated task, but it was the longest because Buddy Buddy has many projects to his credit despite his young age. It is especially the fact to realize a project with very square guidelines and in a very rigorous way which I liked and it was really interesting.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
  <div class="Part">
    <div class="Part-header Part-header--center">
      <h3 class="Part-title Text--center">Case study home</h3>
      <p class="Part-description Text--center">We can find on the home page of the case study a short vidéo of the project, with the comptences used by the team and 3 navigations tools (previous and next project) and the scroll.</p>
    </div>
    <img src="<?= IMAGES_URL ?>Buddy-Buddy/Askeet.png" alt="Askeet">
  </div>
</section>
<section class="Slide Slide--dark Text--white">
  <div class="Part">
    <div class="Part-header Part-header--center">
      <h3 class="Part-title Text--center">The case study</h3>
      <p class="Part-description Part-description--large Text--center">All the case study on the Buddy Buddy website have the same plan. The first part is the project presentation. Then we present the branding identity and the style guide. The last part is composed of the model won desktop and mobile.</p>
    </div>
    <img src="<?= IMAGES_URL ?>Buddy-Buddy/Macbook.png" alt="Macbook" class="cheat-macbook">
  </div>
</section>
<section class="Slide Slide--light Slide--page">
  <?php
  $post = [
    'title' => [
      'top' => 'How',
      'center' => 'we solved',
      'bottom' => 'it ?',
    ],
    'paragraphs' => [
      'I just had to informed myself and ask as many questions as possible to all members of the team. I made a lot of design watch and I choose the best trending websites and works of the moment. Then I tried to inspired myself and mix it the project content and the result is here.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
  <div class="Part">
    <div class="Part-header Part-header--center">
      <h3 class="Part-title Text--center">Case study page</h3>
      <p class="Part-description Text--center">When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation.</p>
      <img src="<?= IMAGES_URL ?>Buddy-Buddy/Screens.png" alt="Screens">
    </div>
  </div>
</section>
<section class="Slide Slide--dark Slide--block Text--white">
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title">Mobile</h3>
    </div>
  </div>
</section>
<div class="Transition Transition--10">
  <!-- <img src="<?= IMAGES_URL ?>Buddy-Buddy/Mobile.png" alt="Mobile"> -->
</div>
<section class="Slide Slide--light">
  <div class="Part-header Part-header--center">
    <h3 class="Part-title Text--center">Mobile case study</h3>
    <p class="Part-description Text--center">When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation. </p>
  </div>
</section>



<section class="Slide Slide--dark Slide--full">
  <img src="<?= IMAGES_URL ?>Buddy-Buddy/Banner.png" alt="Banner">
</section>
<section class="Slide Slide--light">
  <?php
  $article = [
    'title' => [
      'top' => 'How',
      'center' => 'the team',
      'bottom' => ' worked ?',
    ],
    'paragraphs' => [
      'I worked in pairs on this project with an Heticien comrade. We cut ourselves the project as well. First list the strong and weak points of the site to solve the weak points. Achieve a competitive benchmark but also on the agencies of the moment. Implement guidelines strict enough not to be in difficulty on the other boxes studios. And finally structure the project in large parts.',
      'Special thanks to Camille Pawlak as UX / UI designer and all the Buddy Buddy team witch helped me during this 4 months internship.',
    ],
  ];
  include $dir . 'modules/article.php';
  ?>
</section>
<?php include $dir . 'layouts/footer.php'; ?>
