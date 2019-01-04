<?php include $dir . 'base.php'; ?>
<?php $project = $data['project']; ?>

<?php $inheritance->startblock('title'); ?>
<?= $data['title']; ?>
<?php $inheritance->endblock('title'); ?>

<?php $inheritance->startblock('body'); ?>
<?php include $dir . 'pages/' . $data['project']->slug . '.php'; ?>
<?php $inheritance->endblock('body'); ?>
