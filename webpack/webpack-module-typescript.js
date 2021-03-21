
const r__fork_ts_checker_webpack_plugin = require('fork-ts-checker-webpack-plugin')
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
				'.ts', '.js',
			],
		},
		use: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
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
		plugins: [
			new r__fork_ts_checker_webpack_plugin({
				typescript: {
					configFile: r__path.resolve('tsconfig.json'),
				},
			}),
		],
	}

}
