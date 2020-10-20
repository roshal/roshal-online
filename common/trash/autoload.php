<?php

set_include_path(__DIR__);

spl_autoload_register(function ($class) {
	$namespace = '';
	$positin = strrpos($class, '\\');
	if ($positin) {
		$namespace = str_replace('\\', '/', substr($class, 0, $positin)) . '/';
		$class = substr($class, $positin + 1);
	}
	require $namespace . 'class.' . $class . '.php';
});
