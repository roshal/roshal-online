
//import '//trackers/google-analytics'
//import '//trackers/yandex-metrika'

import * as p__react from 'pretty'

import r__pretty from 'pretty'
import r__react_dom__server from 'react-dom/server'
import r__url from 'url'

import d__router from './router'

const $ = require('react-hyperscript')

interface i__props {
	assets: {
		css: string[], js: string[],
	},
}

const render = (locals: {
	path: string,
}, component: p__react.FC, props: i__props) => {
	console.log(9876543210, locals)
	const element = component({
		assets: props.assets,
		path: locals.path,
	})
	const html = r__react_dom__server.renderToStaticMarkup(element)
	const markup = ['<!DOCTYPE html>', html].join('')
	return process.env.NODE_ENV === 'production' ? markup : r__pretty(markup, {
		ocd: true,
	})
}

export default (locals: {
	[key: string]: any,
}) => {
	const assets = Object.keys(locals.webpackStats.compilation.assets).reduce((accumulator, value) => {
		value = r__url.parse(value).pathname
		if (value.match(/\.css$/)) {
			accumulator.css.push(value)
		}
		if (value.match(/\.js$/)) {
			accumulator.js.push(value)
		}
		return accumulator
	}, {
		css: [], js: [],
	})
	return render({
		path: locals.path,
	}, d__router, {
		assets,
	})
}
