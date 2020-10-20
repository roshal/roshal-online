import gulp              from 'gulp'
import gulp_load_plugins from 'gulp-load-plugins'
import multipipe         from 'multipipe'
const plugins = gulp_load_plugins()
module.exports = (options) => {
	return multipipe(
		gulp.src(options.source + '/*', {
			nodir: true,
		}),
		plugins.if(plugins.util.env.develop, plugins.sourcemaps.init()),
		plugins.sass({
			includePaths: 'node_modules/normalize.css',
			indentType: 'tab',
			outputStyle: plugins.util.env.produce ? 'compressed' : 'expanded',
		}),
		plugins.autoprefixer(),
		plugins.if(plugins.util.env.produce, plugins.cleanCss({
			level: {
				1: {
					specialComments: plugins.util.env.develop,
				},
				2: {},
			},
		})),
		plugins.if(plugins.util.env.develop, plugins.sourcemaps.write()),
		gulp.dest(options.output),
		options.debug(),
	).on('error', options.handler)
}
