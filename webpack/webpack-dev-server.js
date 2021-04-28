
module.exports = (env = {}, argv = {}) => {
	return {
		devServer: {
			compress: argv.https,
			historyApiFallback: true,
			host: '0.0.0.0',
			https: argv.https,
			index: '/index.html',
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
			//injectHot: false,
			//historyApiFallback: {
			//	rewrites: [
			//		{
			//			from: /\/$/,
			//			to: '/',
			//		},
			//	],
			//},
		},
	}
}
