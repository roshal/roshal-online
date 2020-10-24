
const r__express = require('express')
const r__spdy = require('spdy')

export default (options) => {
	const express = r__express()
	const server = r__express.static(options.target)
	const spdy = r__spdy.createServer({
		requestCert: true,
	}, express)
	express.use(server)
	spdy.listen(options.port)
	console.log('port', options.port)
}
