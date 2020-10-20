const $ = require('../node/packages')(
	'path',
	'webpack',
)
module.exports = (env = {}, argv) => {
	return {
		plugins: [
			new $['webpack'].PrefetchPlugin('./styles/common.sass'),
		],
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.css$/,
						],
					},
					use: [
						{
							loader: 'style-loader',
							options: {
								convertToAbsoluteUrls: argv.produce,
								sourceMap: argv.develop,
							},
						},
						{
							loader: 'css-loader',
							options: {
								minimize: argv.produce,
								sourceMap: argv.develop,
							},
						},
					],
				},
				{
					resource: {
						include: [
							$['path'].join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.sass$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
								sourceMap: argv.develop,
							}
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
					],
				},
			],
		},
	}
}
