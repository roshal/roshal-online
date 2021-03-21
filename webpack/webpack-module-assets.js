
const r__copy_webpack_plugin = require('copy-webpack-plugin')
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		include: [
			r__path.resolve('assets'),
		],
		generator: {
			filename: env.develop ? '[file]' : 'assets/[file]?[hash]',
		},
		type: 'asset/resource',
	})

	rules.push({
		include: [
			r__path.resolve('images'),
		],
		generator: {
			filename: env.develop ? 'assets/[file]' : 'assets/[file]?[hash]',
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
		],
	}

}
