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

    ],
  ];
  include $dir . 'modules/post.php';
  ?>
</section>
<?php include $dir . 'layouts/footer.php'; ?>
