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
      'This project is quite special since it consisted in finding a partnership with the Tesla brand to communicate on its latest model, the Tesla Model 3. The objective was to realize several scenarios through 3 supports: the Tesla tablet, the mobile and the watch. It was both inspired by the Tesla charter while combining with the brand chosen by our team.',
      'And we ended up choosing Oculus integrating a VR experience inside the vehicle. I\'ll let you discover more',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
</section>
<section class="Slide Slide--dark">
  <div class="Component">
    <div class="Component-header">
      <h3 class="Component-title Component-title--trailed Text--white">Branding - Graphic charter</h3>
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
      'Creating a consistent product on 3 different media was certainly the most complex task. We worked in teams of 2 for each medium, except the Watch which only required one person. Above all, it was necessary to take into account the graphic charters of both brands without letting one of them dominate.',
      'And the main problem was to create into the vehicle interactions with the oculus product without hurting people in the car.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
  <div class="Component">
    <div class="Component-header">
      <h3 class="Component-title Text--center">Touchscreen</h3>
    </div>
  </div>
</section>
<section class="Slide Slide--dark">

</section>
<section class="Slide Slide--light Slide--page">
  <?php
  $post = [
    'title' => [
      'top' => 'How',
      'center' => 'I solved',
      'bottom' => 'it ?',
    ],
    'paragraphs' => [
      'Communication first and foremost. Each step was seen and reviewed by each member of the team. As for the final graphic charter, I realized with my partner on the mobile version. It was later declined on other media.',
      'It was necessary to think and imagine how VR would settle in a vehicle. So we also decided to use a type of Oculus gloves that passengers will use during their experiences to navigate without problems.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
</section>
<section class="Slide Slide--dark Slide--page">

</section>
<section class="Slide Slide--light Slide--page">
  <?php
  $post = [
    'title' => [
      'top' => 'Why',
      'center' => 'that',
      'bottom' => 'project ?',
    ],
    'paragraphs' => [
      'It is certainly the project where I learned the most, and which amused me the most. It was necessary to think and imagine how VR would settle in a vehicle. It was a very interesting phase of reflection where each member of the team was able to propose ideas.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
</section>
<section class="Slide Slide--dark Slide--page">

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
      'We were 5 on this project. 2 people on the tablet part, 2 on the mobile part and finally 1 on the watch. For my part I worked continuously with a friend for the mobile part. We were able to iterate on the Watch part.',
      'What I liked a lot was also the prototype phase and especially the discovery of a way to visualize his Sketch models in VR, a task that required a lot of time and research.',
      'Special thanks to Gabriel Duret, Marina Ferreira Duarte, Clara Foggetti and Thomas Hénault as UX / UI designer and Marina for helping me  for the prototypes.',
    ],
  ];
  include $dir . 'modules/article.php';
  ?>
</section>
<?php include $dir . 'layouts/footer.php'; ?>
