
const r__express = require('express')
const r__path = require('path')

const path = r__path.resolve('../public/index.html')

const express = r__express()

const static = r__express.static()

express.use(static)

express.get('*', (request, response) => {
	response.sendFile(path)
})

const port = process.env.PORT || 1024

express.listen(port, () => {
	console.log('port', port)
})
