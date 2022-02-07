
const fs = require('fs')
const json_format = require('json-format')

class WebpackPlugin {
	constructor (options) {
		this.options = {
			pretty: true,
			throwError: false,
			path: 'options.json',
			...options
		}
	}
	apply = (compiler) => {
		const options = this.options.pretty
			? json_format(compiler.options)
			: JSON.stringify(compiler.options)
		fs.writeFile(this.options.path, options)
		compiler.plugin('before-compile', (compilation, callback) => {
			if (this.options.abort) {
				// stop compilation of project and just write options object
				callback(new Error('Successfully written output, aborted webpack process'))
			} else {
				callback()
			}
		})
	}
}

module.exports = WebpackPlugin
