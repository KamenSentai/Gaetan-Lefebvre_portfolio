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
<section class="Slide Slide--dark">
  <div class="Component">
    <div class="Component-header">
      <h3 class="Component-title Component-title--trailed Text--white">Colors and typography</h3>
    </div>
  </div>
</section>
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
  <div class="Component">
    <div class="Component-header">
      <h3 class="Component-title Text--center">Case study home</h3>
      <p class="Component-subtitle">We can find on the home page of the case study a short vidéo of the project, with the comptences used by the team and 3 navigations tools (previous and next project) and the scroll.</p>
    </div>
  </div>
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
