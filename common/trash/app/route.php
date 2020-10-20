<?php

namespace App;

class Route {
	public static function start() {
		include 'templates/index.php';
	}
	public static function display() {
		$route = static::route();
		include $route;
	}
	protected static function route() {
		$uri = $_SERVER['REQUEST_URI'];
		$routes = ['templates/pages/error.php',
			'/' => 'templates/pages/main.php',
		NULL];
		if (array_key_exists($uri, $routes)) {
			$route = $routes[$uri];
		} else {
			$route = $routes[0];
		}
		return $route;
	}
}
