<div class="Post">
  <h2 class="Post-title">
    <span class="Text Text--subtitle Text--grey"><?= $post['title']['top']; ?></span>
    <span class="Text Text--subtitle Text--black"><?= $post['title']['center']; ?></span>
    <span class="Text Text--subtitle Text--<?= $project->color; ?>"><?= $post['title']['bottom']; ?></span>
  </h2>
  <div class="Post-text">
    <?php foreach ($post['paragraphs'] as $paragraph): ?>
      <p class="Post-paragraph"><?= $paragraph; ?></p>
    <?php endforeach; ?>
  </div>
</div>
