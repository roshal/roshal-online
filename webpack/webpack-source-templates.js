const $ = require('../node/packages')(
	'path',
	'webpack',
)
module.exports = () => {
	return {
		plugins: [
			new $['webpack'].PrefetchPlugin('./templates/index.pug'),
		],
		module: {
			rules: [
				{
					resource: {
						include: [
							$['path'].join(__dirname, '..', 'source', 'templates'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].html',
							},
						},
						{
							loader: 'pug-plain-loader',
							options: {
								basedir: $['path'].join(__dirname, '..', 'source', 'templates'),
							},
						},
					],
				},
			],
		},
	}
}
