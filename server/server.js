
const p__express = require('express')
const p__path = require('path')

const path = p__path.resolve('../public/index.html')

const express = p__express()

const static = p__express.static()

express.use(static)

express.get('*', (request, response) => {
	response.sendFile(path)
})

const port = process.env.PORT || 1024

express.listen(port, () => {
	console.log('port', port)
})
