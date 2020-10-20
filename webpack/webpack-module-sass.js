
const p__mini_css_extract_plugin = require('mini-css-extract-plugin')
const p__path = require('path')

const m__name_generator = require('../javascript/name-generator')

module.exports = (env = {}, argv = {}) => {
	const loaders = []

	loaders.push({
		loader: p__mini_css_extract_plugin.loader,
	})

	const options = {
		indentType: 'tab',
		indentWidth: 1,
		outputStyle: 'expanded',
	}

	const resolve = {
		alias: {
			'/': p__path.resolve('styles'),
		},
		extensions: [
			'.sass',
		],
	}

	const rules = []

	rules.push({
		test: [
			/\.sass$/,
		],
		include: [
			p__path.resolve('source'),
		],
		use: [
			...loaders,
			{
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
			},
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
			p__path.resolve('styles'),
		],
		use: [
			...loaders,
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
				},
			},
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
			new p__mini_css_extract_plugin({
				filename: env.develop ? '[name].css' : 'assets/[name].css?[hash]',
				ignoreOrder: true,
			}),
		],
	}
}
