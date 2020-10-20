const $ = require('../node/packages')(
	'path',
)
module.exports = () => {
	return {
		module: {
			rules: [
				{
					resource: {
						exclude: [
							$['path'].join(__dirname, '..', 'node_modules'),
						],
						include: [
							$['path'].join(__dirname, '..', 'source', 'scripts'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								plugins: [
									'@babel/plugin-syntax-dynamic-import',
									'@babel/plugin-transform-runtime',
									'babel-plugin-lodash',
								],
								presets: [
									'@babel/preset-env',
								],
							},
						},
					],
				},
			],
		},
	}
}
