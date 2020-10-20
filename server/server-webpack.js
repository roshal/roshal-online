
const p__express = require('express')
const p__webpack = require('webpack')
const p__webpack_dev_middleware = require('webpack-dev-middleware')
const p__webpack_hot_middleware = require('webpack-hot-middleware')
const p__yargs = require('yargs')

const m__config = require('../webpack.config.js')

const express = p__express()

const config = m__config(p__yargs.argv, p__yargs.argv)

const compiler = p__webpack(config)

const webpack_dev_middleware = p__webpack_dev_middleware(compiler)
const webpack_hot_middleware = p__webpack_hot_middleware(compiler)

express.use(webpack_dev_middleware)
express.use(webpack_hot_middleware)

const port = process.env.PORT || 1024

express.listen(port, () => {
	console.log('port', port)
})
