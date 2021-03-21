
//	import '//trackers/google-analytics'
//	import '//trackers/yandex-metrika'

import * as $ from 'react-hyperscript'
import * as p__react from 'react'
import * as p__react_dom__server from 'react-dom/server'

import m__index from '/components/index'

const r__pretty = require('pretty')

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
}): string => {
	const element = component(props)
	const html = p__react_dom__server.renderToStaticMarkup(element)
	const markup = ['<!DOCTYPE html>', html].join('')
	return process.env.NODE_ENV === 'production' ? markup : r__pretty(markup, {
		ocd: true,
	})
}

export default (locals: {
	[key: string]: any,
} = {}): string => {
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
