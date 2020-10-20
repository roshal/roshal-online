import express from 'express'
module.exports = (options, callback) => {
	const server = express({
		setHeaders: response => {
			response.setHeader('Access-Control-Allow-Origin', '*')
		},
	}).use(express.static(options.folder))
	server.listen(options.port)
	callback()
}
