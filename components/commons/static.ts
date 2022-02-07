
import * as p__react from 'react'
import * as p__react_dom__server from 'react-dom/server'

//import '/source/trackers/google-analytics'
//import '/source/trackers/yandex-metrika'

import d__router from './router'

const r__pretty = require('pretty')

interface i__props {
	assets: {
		css: string[], js: string[],
	},
}

const render = (locals: {
	path: string,
}, component: p__react.FC<{
	[key: string]: any,
}>, props: i__props) => {
	const element = component({
		assets: props.assets,
		path: locals.path,
	})
	const html = p__react_dom__server.renderToStaticMarkup(element)
	const markup = ['<!DOCTYPE html>', html].join('')
	return process.env.NODE_ENV === 'production' ? markup : r__pretty(markup, {
		ocd: true,
	})
}

export default (locals: {
	[key: string]: any,
}) => {
	const assets = Object.keys(locals.webpackStats.compilation.assets).reduce((accumulator, value) => {
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
