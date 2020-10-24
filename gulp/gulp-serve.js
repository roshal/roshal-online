
const r__express = require('express')

module.exports = (options = {}) => {
	const express = r__express()
	const server = r__express.static(options.target)
	express.use(server)
	express.listen(options.port)
	console.info('port', options.port)
}
