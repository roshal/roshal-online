
const p__path = require('path')

module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						test: [
							/\.ts$/,
						],
						include: [
							p__path.resolve('source'),
						],
					},
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
				},
			],
		},
	}
}
