<?php

namespace Portfolio;

use Portfolio\Autoloader;

use Portfolio\Settings    as PS;
use Portfolio\Routes      as PR;
use Portfolio\Helpers     as PH;
use Portfolio\Models      as PM;
use Portfolio\Views       as PV;
use Portfolio\Controllers as PC;

require '../includes/Autoloader.php';
Autoloader::register();

$errors      = new PS\Errors();
$config      = new PS\Config();
$router      = new PR\Router(isset($_GET['url']) ? $_GET['url'] : '', __NAMESPACE__);
$inheritance = new PH\Inheritance();
$datascript  = new PM\Datascript(__DIR__ . '/../data/');
$template    = new PV\Template($router, $inheritance, '/pages');

$router->get('/', function() use ($router, $template) {
  $template->render('home');
}, 'home');

$router->get('/home', function() use ($router) {
  header("Location: {$router->url('home')}");
  exit;
});

$router->get('/projects', function() use ($router, $template) {
  $template->render('projects');
}, 'projects');

$router->get('/about', function() use ($router, $template) {
  $template->render('about');
}, 'about');

$router->get('/contact', function() use ($router, $template) {
  $template->render('contact');
}, 'contact');

$router->get('/projects/:slug', function($slug) use ($router, $template, $datascript) {
  $projects = $datascript->getFile('projects');
  $project  = $datascript->findElement($projects, 'slug', $slug);

  $data = [
    'title'   => "Gaëtan Lefebvre | $project->name",
    'project' => $project,
  ];

  $template->render('project', $data);
}, 'project');

$router->run();
