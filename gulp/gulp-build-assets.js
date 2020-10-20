
const p__gulp_watch = require('gulp-watch')
const p__path = require('path')

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = p__path.join(paths.source, '**')
	return p__gulp_watch(glob, options)
}
