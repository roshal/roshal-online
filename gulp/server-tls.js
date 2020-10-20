import express from 'express'
import fs      from 'fs'
import spdy    from 'spdy'
module.exports = (options) => {
	const server = express({
		setHeaders: response => {
			response.setHeader('Access-Control-Allow-Origin', '*')
		},
	}).use(express.static(options.folder))
	spdy.createServer({
		cert: fs.readFileSync('tls.crt.pem'),
		key: fs.readFileSync('tls.key.pem'),
	}, server).listen(options.port)
}
