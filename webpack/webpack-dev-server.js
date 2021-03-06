
module.exports = (env = {}, argv = {}) => {
	return {
		devServer: {
			compress: argv.https,
			historyApiFallback: true,
			//historyApiFallback: {
			//	rewrites: [
			//		{
			//			from: /\/$/,
			//			to: '/',
			//		},
			//	],
			//},
			host: '0.0.0.0',
			https: argv.https,
			index: '/index.html',
			injectHot: false,
			port: argv.port || 1024,
			proxy: {
				'/api/': {
					changeOrigin: true,
					target: '//localhost:2048',
					pathRewrite: {
						'^/api/': '/',
					},
				},
			},
		},
	}
}
