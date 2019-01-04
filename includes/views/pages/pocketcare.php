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
<section class="Slide Slide--dark">
  <div class="Component">
    <div class="Component-header">
      <h3 class="Component-title Component-title--trailed Text Text--white">Colors and typography</h3>
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
      'The major problem has been to design an easy-to-access application for all members of a family. Knowing that the app uses not necessarily simple documents like the vital card or prescriptions. The whole process for registering a card has also been quite complicated.',
    ],
  ];
  include $dir . 'modules/post.php';
  ?>
  <div class="Component">
    <div class="Component-header">
      <h3 class="Component-title Text Text--center">Onboarding</h3>
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
