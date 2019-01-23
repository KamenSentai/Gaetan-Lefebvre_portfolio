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
      'Pocketcare was born from a student project. The goal was to design an innovative solution for the medical field.',
      'After several interviews, we noticed a problem with the loss of prescriptions. In addition we found that one could use the vital and mutual card in a more efficient way. Pocketcare is the solution to these problems.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
</section>
<!-- <section class="Slide Slide--dark Text--white">
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title Part-title--trailed">Colors and typography</h3>
    </div>
    <div class="Part-content">
      <div class="Part-col">

      </div>
      <div class="Part-col">

      </div>
    </div>
  </div>
</section> -->
<!-- <img src="<?= IMAGES_URL ?>CTp.png" alt=""> -->
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
      'The major problem has been to design an easy-to-access application for all members of a family. Knowing that the app uses not necessarily simple documents like the vital card or prescriptions. The whole process for registering a card has also been quite complicated.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title Text--center">Onboarding</h3>
    </div>
    <div class="Part-table">
      <img src="<?= IMAGES_URL ?>Pocketcare/Onboarding_1.png" alt="Onboarding">
      <img src="<?= IMAGES_URL ?>Pocketcare/Onboarding_2.png" alt="Onboarding">
      <img src="<?= IMAGES_URL ?>Pocketcare/Onboarding_3.png" alt="Onboarding">
    </div>
  </div>
  <?php
  $post = [
    'title' => [
      'top' => 'How',
      'center' => 'the team',
      'bottom' => 'solved it ?',
    ],
    'paragraphs' => [
      'To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand. We then thought it would be a good idea to rework the cards and let the step validation icons speak for the card recording phase.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
</section>
<section class="Slide Slide--dark Slide--full">
  <img src="<?= IMAGES_URL ?>Pocketcare/Banner_Inscription.png" alt="Banner Inscription">
</section>
<section class="Slide Slide--light Slide--page">
  <div class="Part">
    <div class="Part-header">
      <h3 class="Part-title">Cards and prescriptions</h3>
    </div>
    <div class="Part-table">
      <!-- <img src="<?= IMAGES_URL ?>Pocketcare/Step_1.png" alt="Screen" class="cheat-screen"> -->
      <!-- <img src="<?= IMAGES_URL ?>Pocketcare/Step_2.png" alt="Screen" class="cheat-screen"> -->
    </div>
  </div>
</section>
<section class="Slide Slide--dark Slide--block Text--white">
  <div class="Part">
    <div class="Part-header Part-header--center">
      <h3 class="Part-title Text--center">Profil and settings</h3>
      <p class="Part-description Text--center">To solve the problem of complexity of the application, we realized a simple onboarding with illustrations and easy to understand.</p>
    </div>
  </div>
</section>
<div class="Transition Transition--20">
  <img src="<?= IMAGES_URL ?>Pocketcare/Screens.png" alt="Screens">
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
      'We worked on 6 on this project. All the team has participated in the UX phase, where we have listed different people. Subsequently, we went through 2 phases of wireframes, low and hight fie.',
      'Then we worked on 3 on the UI by cutting into 3 large parts the project, namely, the onboarding and registration, the registration of the cards and prescriptions and the profile part.',
      'Special thanks to Marina Ferreira Duarte and Clara Foggetti as UX / UI designer and Clarisse Garcia, Thomas Hénault and Marine Le Borgne as UX designer.',
    ],
  ];
  include $dir . 'modules/article.php';
  ?>
</section>
<?php include $dir . 'layouts/footer.php'; ?>
