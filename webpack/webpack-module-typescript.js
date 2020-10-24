
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		test: [
			/\.ts$/,
		],
		include: [
			r__path.resolve('source'),
			r__path.resolve('templates'),
		],
		resolve: {
			extensions: [
				'.js', '.ts',
			],
		},
		use: [
			{
				loader: 'ts-loader',
				options: {
					context: r__path.resolve(),
					configFile: 'tsconfig.json',
					compilerOptions: {
						sourceMap: !!env.develop,
					},
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
