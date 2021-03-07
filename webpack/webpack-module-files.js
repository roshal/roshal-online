
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		include: [
			r__path.resolve('assets'),
		],
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					...env.develop ? {
						context: r__path.resolve('assets'),
					} : {},
				},
			},
		],
	})

	rules.push({
		include: [
			r__path.resolve('images'),
		],
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					...env.develop ? {
						context: r__path.resolve('images'),
					} : {},
				},
			},
		],
	})

	return {
		module: {
			rules,
		},
	}

}
