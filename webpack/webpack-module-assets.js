
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		include: [
			r__path.resolve('assets'),
		],
		type: 'asset/resource',
		generator: {
			filename: env.develop ? '[name][ext]' : 'assets/[name][ext]?[hash]',
		},
	})

	rules.push({
		include: [
			r__path.resolve('images'),
		],
		type: 'asset',
		generator: {
			filename: env.develop ? 'assets/[name][ext]' : 'assets/[name][ext]?[hash]',
		},
	})

	return {
		module: {
			rules,
		},
	}

}
