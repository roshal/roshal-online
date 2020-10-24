
const r__mini_css_extract_plugin = require('mini-css-extract-plugin')
const r__path = require('path')

const m__name_generator = require('../javascript/name-generator')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	const loaders = []

	const options = {
		indentType: 'tab',
		indentWidth: 1,
		outputStyle: 'expanded',
	}

	const resolve = {
		alias: {
			'/': r__path.resolve('styles'),
		},
		extensions: [
			'.sass',
		],
	}

	loaders.push({
		loader: r__mini_css_extract_plugin.loader,
	})

	loaders.push({
		loader: 'css-loader',
		options: {
			modules: {
				...env.develop ? {
					getLocalIdent: m__name_generator(10),
				} : {},
				...env.produce ? {
					getLocalIdent: m__name_generator(26),
				} : {},
			},
			importLoaders: 1,
		},
	})

	rules.push({
		test: [
			/\.sass$/,
		],
		include: [
			r__path.resolve('source'),
		],
		use: [
			...loaders,
			{
				loader: 'sass-loader',
				options: {
					sassOptions: options,
				},
			},
		],
		resolve,
	})

	rules.push({
		test: [
			/\.sass$/,
		],
		include: [
			r__path.resolve('styles'),
		],
		use: [
			...loaders,
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						...options,
						webpackImporter: false,
					},
				},
			},
		],
		resolve,
	})

	return {
		module: {
			rules,
		},
		plugins: [
			new r__mini_css_extract_plugin({
				filename: env.develop ? '[name].css' : 'assets/[name].css?[hash]',
				//ignoreOrder: true,
			}),
		],
	}

}
