
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	const rules = []

	rules.push({
		test: [
			/\.js$/,
		],
		include: [
			p__path.resolve('source'),
			p__path.resolve('templates'),
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
