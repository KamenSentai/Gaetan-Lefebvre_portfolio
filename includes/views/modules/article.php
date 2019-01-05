<div class="Article">
  <h2 class="Article-title Text--subtitle">
    <span class="Text--grey"><?= $article['title']['top']; ?></span>
    <span class="Text">
      <span class="Text--black"><?= $article['title']['center']; ?></span>
      <span class="Text"> </span>
      <span class="Text--<?= $project->color; ?>"><?= $article['title']['bottom']; ?></span>
    </span>
  </h2>
  <div class="Article-text">
    <?php foreach ($article['paragraphs'] as $paragraph): ?>
      <p class="Article-paragraph"><?= $paragraph; ?></p>
    <?php endforeach; ?>
  </div>
</div>
