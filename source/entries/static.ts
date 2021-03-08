
import * as p__react from 'react'
import i__pretty from 'pretty'
import i__react_dom__server from 'react-dom/server'

//	import '//trackers/google-analytics'
//	import '//trackers/yandex-metrika'

import d__router from './router'

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
	console.log(9876543210, locals)
	const element = component({
		assets: props.assets,
		path: locals.path,
	})
	const html = i__react_dom__server.renderToStaticMarkup(element)
	const markup = ['<!DOCTYPE html>', html].join('')
	return process.env.NODE_ENV === 'production' ? markup : i__pretty(markup, {
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
