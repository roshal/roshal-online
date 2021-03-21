
const r__css_minimizer_webpack_plugin = require('css-minimizer-webpack-plugin')
const r__static_site_generator_webpack_plugin = require('static-site-generator-webpack-plugin')
const r__terser_webpack_plugin = require('terser-webpack-plugin')

module.exports = (env = {}, argv = {}) => {
	return {
		entry: {
			start: './entries/start.ts',
		},
		mode: 'production',
		output: {
			libraryTarget: 'commonjs2',
		},
		optimization: {
			minimizer: [
				new r__css_minimizer_webpack_plugin({
					minimizerOptions: {
						preset: ['default', {
							discardComments: {
								removeAll: true,
							},
						}],
					},
				}),
				new r__terser_webpack_plugin({
					terserOptions: {
						toplevel: true,
						output: {
							comments: false,
						},
					},
					extractComments: false,
				}),
			],
		},
		plugins: [
			new r__static_site_generator_webpack_plugin({
				crawl: true,
				entry: 'start',
				globals: {
					window: {},
				},
			}),
		],
		target: 'node',
		performance: {
			maxEntrypointSize: 128 << 12,
			maxAssetSize: 128 << 11,
			assetFilter: (asset) => {
				return asset.endsWith('.js')
			},
		},
	}
}
