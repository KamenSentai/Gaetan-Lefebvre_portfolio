<?php

namespace Portfolio\Settings;

class Config {
  public function __construct() {
    define('INDEX_PATH', $_SERVER['PHP_SELF']);
    define('INDEX_FILE', 'index.php');
    define('BASE_URL',   str_replace(INDEX_FILE, '', INDEX_PATH));
  }
}
