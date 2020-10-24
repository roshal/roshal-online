
//import '//trackers/google-analytics'
//import '//trackers/yandex-metrika'

import r__pretty from 'pretty'
import r__react_dom__server from 'react-dom/server'
import r__url from 'url'

import m__index from '/templates/index'

const $ = require('react-hyperscript')

interface i__assets {
	css: string[], js: string[],
}

const component = (props: {
	assets: i__assets,
}) => {
	return [
		$(m__index, {
			assets: props.assets,
		}),
	]
}

const render = (locals = {}, component, props: {
	assets: i__assets,
}) => {
	const element = component(props)
	const html = r__react_dom__server.renderToStaticMarkup(element)
	const markup = ['<!DOCTYPE html>', html].join('')
	return process.env.NODE_ENV === 'production' ? markup : r__pretty(markup, {
		ocd: true,
	})
}

export default (locals: {
	[key: string]: any,
} = {}) => {
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
	return render(locals, component, {
		assets,
	})
}
