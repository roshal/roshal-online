
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		test: [
			/\.ts$/,
		],
		include: [
			r__path.resolve('commons'),
			r__path.resolve('components'),
			r__path.resolve('source'),
		],
		resolve: {
			extensions: [
				'.js', '.ts',
			],
		},
		use: [
			{
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					// context: r__path.resolve(),
				},
			},
			{
				loader: 'ts-loader',
				options: {
					// context: r__path.resolve(),
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
