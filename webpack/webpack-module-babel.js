
const r__path = require('path')

module.exports = (env = {}, argv = {}) => {

	const rules = []

	rules.push({
		test: [
			/\.[jt]s$/,
		],
		include: [
			r__path.resolve('commons'),
			r__path.resolve('components'),
			r__path.resolve('source'),
		],
		resolve: {
			extensions: [
				'.ts', '.js',
			],
		},
		use: [
			{
				loader: 'babel-loader',
				options: {
					cacheDirectory: env.WEBPACK_SERVE,
				},
			},
			{
				loader: 'ts-loader',
				options: {
					configFile: r__path.resolve('tsconfig.json'),
					compilerOptions: {
						sourceMap: env.develop,
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
