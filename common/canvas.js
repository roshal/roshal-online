addHandler(window, 'load', common);
function common() {
	con = document.getElementsByTagName('canvas')[0].getContext('2d');
	con.translate(0, 0);
	con.scale(1, 1);
	qwe = '#369';
	asd = '#69c';
	zxc = '#fff';
	box(con, qwe, 0, 16, 0, 16);
	box(con, asd, 1, 15, 1, 15);
	box(con, qwe, 2, 3, 1, 15);
	box(con, qwe, 5, 13, 3, 10);
	box(con, zxc, 6, 12, 4, 5);
	box(con, zxc, 6, 12, 6, 7);
	box(con, zxc, 6, 12, 8, 9);
}
function box(con, color, top, bottom, left, right) {
	con.fillStyle = color;
	con.beginPath();
	con.lineTo(top, right);
	con.lineTo(bottom, right);
	con.lineTo(bottom, left);
	con.lineTo(top, left);
	con.closePath();
	con.fill();
}
function launch_html5() {
//	поддержка тегов html5
	html5 = Array ('article', 'aside', 'figcaption', 'figure', 'footer', 'header', 'hgroup', 'nav', 'section', 'time');
	for (var i = 0; i < html5.length; i++) {
		document.createElement(html5[i]);
	}
}
function addHandler(object, event, handler, useCapture) {
//	функция для добавления обработчика событий
	if (object.addEventListener) {
		object.addEventListener(event, handler, useCapture ? useCapture : false);
	} else if (object.attachEvent) {
		object.attachEvent('on' + event, handler);
	}
}
function $id(name) {
	return document.getElementById(name);
}
Object.prototype.$class = function (name) {
	if (this == window) {
		node = document;
	} else {
		node = this;
	}
	if (document.getElementsByTagName) {
	return node.getElementsByClassName(name);
	} else {
		elements = node.getElementsByTagName('*');
		objects = [];
		for (i = 0; i < elements.length; i++) {
			if (elements[i].className == name) {
				objects.push(elements[i])
			}
		}
		return objects;
	}
}
Object.prototype.$tag = function (name) {
	if (this == window) {
		node = document;
	} else {
		node = this;
	}
	return node.getElementsByTagName(name);
}
function log(data) {
	console.log(data);
}
