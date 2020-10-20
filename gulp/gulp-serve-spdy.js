
const p__express = require('express')
const p__spdy = require('spdy')

export default (options) => {
	const express = p__express()
	const server = p__express.static(options.target)
	const spdy = p__spdy.createServer({
		requestCert: true,
	}, express)
	express.use(server)
	spdy.listen(options.port)
	console.log('port', options.port)
}
