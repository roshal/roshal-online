
import * as $ from 'react-hyperscript'
import * as p__react from 'react'
import * as p__react_dom__server from 'react-dom/server'
import i__pretty from 'pretty'

//	import '//trackers/google-analytics'
//	import '//trackers/yandex-metrika'

import m__index from '/templates/index'

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
	][0]
}

const render = (locals = {}, component: p__react.FC<{
	assets: i__assets,
}>, props: {
	assets: i__assets,
}) => {
	const element = component(props)
	const html = p__react_dom__server.renderToStaticMarkup(element)
	const markup = ['<!DOCTYPE html>', html].join('')
	return process.env.NODE_ENV === 'production' ? markup : i__pretty(markup, {
		ocd: true,
	})
}

export default (locals: {
	[key: string]: any,
} = {}) => {
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
	return render(locals, component, {
		assets,
	})
}
