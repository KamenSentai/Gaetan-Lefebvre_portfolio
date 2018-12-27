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
$data        = new PM\Data(__DIR__ . '/../data/');
$template    = new PV\Template($router, $inheritance, '/pages');

$router->get('/', function() use ($router, $template) {
  $template->render('home');
}, 'home');

$router->get('/home', function() use ($router) {
  header("Location: {$router->url('home')}");
  exit;
});

$router->run();
