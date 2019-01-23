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
<!-- <section class="Slide Slide--dark Text--white">
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title Part-title--trailed">Branding - Graphic charter</h3>
    </div>
  </div>
</section> -->
<img src="<?= IMAGES_URL ?>CTt.png" alt="">
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
      'Creating a consistent product on 3 different media was certainly the most complex task. We worked in teams of 2 for each medium, except the Watch which only required one person. Above all, it was necessary to take into account the graphic charters of both brands without letting one of them dominate.',
      'And the main problem was to create into the vehicle interactions with the oculus product without hurting people in the car.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title Text--center">Touchscreen</h3>
    </div>
  </div>
</section>
<section class="Slide Slide--dark Slide--block Slide--bottom Text--white">
  <div class="Part">
    <div class="Part-header Part-header--center">
      <h3 class="Part-title Text--center">Inside the car</h3>
      <p class="Part-description Part-description--large Text--center">The touchscreen is first of all the way to navigate and obtain all the informations about the Tesla Model 3. But it’s also the way to interact the the Oculus Rift for the passenger beside to the driver and the driver himself when the car is stopped.</p>
    </div>
  </div>
  <img src="<?= IMAGES_URL ?>Tesla/Car.png" alt="Car">
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
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title">Mobile app</h3>
    </div>
    <div class="Part-table">
      <div class="Part-quarter">
        <h4 class="Part-section">Charge and navigation</h4>
        <p class="Part-text">When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car.</p>
        <p class="Part-text">The navigation will tell you the distance of the car and the localisation. You will also have an AR view of the street.</p>
      </div>
    </div>
  </div>
</section>
<section class="Slide Slide--dark Text--white">
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title">Oculus in your hand</h3>
      <p class="Part-description">Here is the main part of the application. You will find the navigation process to acess to all the features a passenger need to have an Oculus experience.</p>
      <p class="Part-description">There is also an onboarding to guide users install the Oculus settings and protect them.</p>
    </div>
    <img src="<?= IMAGES_URL ?>Tesla/Phone_1.png" alt="Phone_1" class="cheat-phone">
    <img src="<?= IMAGES_URL ?>Tesla/Phone_2.png" alt="Phone_2" class="cheat-phone">
    <img src="<?= IMAGES_URL ?>Tesla/Phone_3.png" alt="Phone_3" class="cheat-phone">
  </div>
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title">Inside the Oculus</h3>
      <p class="Part-description">Finally, you can find here the charging part. Then the localisation, same as the mobile part to find the car. And the little option to bring the car forward or backward in some specials situations.</p>
    </div>
    <img src="<?= IMAGES_URL ?>Tesla/Hands.png" alt="Hands">
  </div>
</section>
<div class="Transition Transition--20">
  <img src="<?= IMAGES_URL ?>Tesla/Helmet.png" alt="Helmet">
</div>
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
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title">Watch and features</h3>
    </div>
    <div class="Part-table">
      <img src="<?= IMAGES_URL ?>Tesla/Watch.png" alt="Watch">
      <div class="Part-half">
        <h4 class="Part-section">Oculus immersion</h4>
        <p class="Part-text">When the Tesla is 100% charged, you will receive a notification to alerte you. After you can start the navigation to return to the car. After you can start the navigation to return to the car.</p>
      </div>
    </div>
  </div>
</section>
<section class="Slide Slide--dark Slide--block Text--white">
  <div class="Part">
    <div class="Part-header Part-header--center">
      <h3 class="Part-title Text--center">Other screens</h3>
      <p class="Part-description Text--center">Finally, you can find here the charging part. Then the localisation, same as the mobile part to find the car. And the little option to bring the car forward or backward in some specials situations.</p>
    </div>
  </div>
</section>
<div class="Transition Transition--10">
  <img src="<?= IMAGES_URL ?>Tesla/Watches.png" alt="Watches">
</div>
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
