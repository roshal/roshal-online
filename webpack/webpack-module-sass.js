
const r__mini_css_extract_plugin = require('mini-css-extract-plugin')
const r__path = require('path')

const m__generate_shuffle = require('../javascript/generate-shuffle')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		test: [
			/\.sass$/,
		],
		include: [
			r__path.resolve('source'),
			r__path.resolve('styles'),
		],
		use: [
			{
				loader: r__mini_css_extract_plugin.loader,
			},
			{
				loader: 'css-loader',
				options: {
					url: false,
					modules: {
						...env.develop ? {
							getLocalIdent: m__generate_shuffle.numbers,
						} : {},
						...env.produce ? {
							getLocalIdent: m__generate_shuffle.letters,
						} : {},
					},
					importLoaders: 1,
				},
			},
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						indentType: 'tab',
						indentWidth: 1,
						outputStyle: 'expanded',
					},
				},
			},
		],
		resolve: {
			roots: [
				r__path.resolve('styles'),
			],
		},
	})

	return {
		module: {
			rules,
		},
		plugins: [
			new r__mini_css_extract_plugin({
				filename: env.develop ? '[name].css' : 'assets/[name].css?[fullhash]',
				//	ignoreOrder: true,
			}),
		],
	}

}
