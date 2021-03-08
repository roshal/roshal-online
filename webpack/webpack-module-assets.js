
const r__copy_webpack_plugin = require('copy-webpack-plugin')
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		include: [
			r__path.resolve('assets'),
		],
		generator: {
			filename: env.develop ? '[path][name][ext]' : 'assets/[path][name][ext]?[hash]',
		},
		type: 'asset/resource',
	})

	rules.push({
		include: [
			r__path.resolve('images'),
		],
		generator: {
			filename: env.develop ? 'assets/[path][name][ext]' : 'assets/[path][name][ext]?[hash]',
		},
		type: 'asset',
	})

	return {
		module: {
			rules,
		},
		plugins: [
			new r__copy_webpack_plugin({
				patterns: [
					{
						from: '../assets',
						to: '.',
					},
				],
			}),
		]
	}

}
