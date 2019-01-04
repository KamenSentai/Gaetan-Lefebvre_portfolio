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
      <h3 class="Component-title Component-title--trailed Text Text--white">Branding - Graphic charter</h3>
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
      <h3 class="Component-title Text Text--center">Touchscreen</h3>
    </div>
  </div>
</section>
<?php include $dir . 'layouts/footer.php'; ?>
