const $ = require('../node/packages')(
	'express',
)
module.exports = (options) => {
	const server = $['express']()
	server.use($['express'].static(options.folder))
	server.listen(options.port)
}
