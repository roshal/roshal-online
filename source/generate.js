
import r__react_dom__server from 'react-dom/server'
import r__react_hyperscript from 'react-hyperscript'

import m__templates__index from '../templates/index'

const $ = r__react_hyperscript

const component = (props) => {
	return [
		$(m__templates__index, {
			assets: props.assets,
		}),
	]
}

const render = (locals, component, props) => {
	const element = component(props)
	const markup = r__react_dom__server.renderToStaticMarkup(element)
	return ['<!DOCTYPE html>', markup].join('')
}

export default (locals) => {
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

const key = [
	'compiler',
	'resolverFactory',
	'inputFileSystem',
	'requestShortener',
	'options',
	'outputOptions',
	'bail',
	'profile',
	'performance',
	'mainTemplate',
	'chunkTemplate',
	'hotUpdateChunkTemplate',
	'runtimeTemplate',
	'moduleTemplates',
	'semaphore',
	'entries',
	'_preparedEntrypoints',
	'entrypoints',
	'chunks',
	'chunkGroups',
	'namedChunkGroups',
	'namedChunks',
	'modules',
	'_modules',
	'cache',
	'records',
	'additionalChunkAssets',
	'assets',
	'assetsInfo',
	'errors',
	'warnings',
	'children',
	'logging',
	'dependencyFactories',
	'dependencyTemplates',
	'childrenCounters',
	'usedChunkIds',
	'usedModuleIds',
	'fileTimestamps',
	'contextTimestamps',
	'compilationDependencies',
	'_buildingModules',
	'_rebuildingModules',
	'emittedAssets',
][0]
