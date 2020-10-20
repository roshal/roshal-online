
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	const rules = []

	rules.push({
		test: [
			/\.ts$/,
		],
		include: [
			p__path.resolve('source'),
		],
		resolve: {
			extensions: [
				'.ts',
				'.js',
			],
		},
		use: [
			{
				loader: 'ts-loader',
				options: {
					context: p__path.resolve(),
					configFile: 'tsconfig.json5',
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
