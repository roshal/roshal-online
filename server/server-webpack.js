
const r__express = require('express')
const r__webpack = require('webpack')
const r__webpack_dev_middleware = require('webpack-dev-middleware')
const r__webpack_hot_middleware = require('webpack-hot-middleware')
const r__yargs = require('yargs')

const m__config = require('../webpack.config.js')

const express = r__express()

const config = m__config(r__yargs.argv, r__yargs.argv)

const compiler = r__webpack(config)

const webpack_dev_middleware = r__webpack_dev_middleware(compiler)
const webpack_hot_middleware = r__webpack_hot_middleware(compiler)

express.use(webpack_dev_middleware)
express.use(webpack_hot_middleware)

const port = process.env.PORT || 1024

express.listen(port, () => {
	console.log('port', port)
})
