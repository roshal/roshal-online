
const p__express = require('express')

module.exports = (options = {}) => {
	const express = p__express()
	const server = p__express.static(options.target)
	express.use(server)
	express.listen(options.port)
	console.info('port', options.port)
}
