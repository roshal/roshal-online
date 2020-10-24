
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		test: [
			/\.js$/,
		],
		include: [
			r__path.resolve('source'),
			r__path.resolve('templates'),
		],
		use: [
			{
				loader: 'babel-loader',
			},
		],
	})

	return {
		module: {
			rules,
		},
	}

}
