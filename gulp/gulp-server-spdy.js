const $ = require('../node/packages')(
	'express',
	'spdy',
)
module.exports = (options) => {
	const server = $['express']()
	server.use($['express'].static(options.folder))
	const spdy = $['spdy'].createServer(server)
	spdy.listen(options.port)
}
