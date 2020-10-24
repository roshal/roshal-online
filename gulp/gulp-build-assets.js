
const r__gulp_watch = require('gulp-watch')
const r__path = require('path')

module.exports = (flags = {}, paths = {}, options = {}) => {
	const glob = r__path.join(paths.source, '**')
	return r__gulp_watch(glob, options)
}
