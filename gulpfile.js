const $ = require('./node/packages')(
	'../node/fill',
	'../node/pick',
	'ansi-colors-lazy',
	'fancy-log',
	'gulp',
	'gulp-debug',
	'minimist',
	'path',
)
const mode = (() => {
	const keys = [
		...[
			'analyse',
			'develop',
			'produce',
		],
		...[
			'build',
			'watch',
		],
	]
	const env = $['minimist'](process.argv.slice(2), {
		boolean: keys,
		default: $['../node/fill'](keys, false)
	})
	return $['../node/pick'](env, keys)
})()
const options = {
	folders: {
		source: 'source',
		output: (() => {
			if (mode.develop) {
				return 'output'
			} else
			if (mode.produce) {
				return 'public'
			}
		})(),
	},
	port: process.env.PORT || (() => {
		if (mode.develop) {
			return 80
		} else
		if (mode.produce) {
			return 443
		}
	})(),
}
const unit = (object) => {
	return () => {
		const id = ['./gulp/gulp', object.name].join('-')
		const module = require(id)
		return module({
			mode, ...object,
		})
	}
}
const task = (object, color) => {
	return unit({
		debug: $['gulp-debug']({
			title: [color('+'), object.name].join(' '),
			showFiles: mode.develop,
		}),
		handler: function (error) {
			const message = [color(error.name), error.message].join('\0')
			$['fancy-log'](message)
			if (mode.develop) {
				this.emit('end')
			}
		},
		...object,
	})
}
const folders = (object) => {
	return {
		source: $['path'].join(
			__dirname, options.folders.source,
			...object.source ? [object.source] : [],
		),
		output: $['path'].join(
			__dirname, options.folders.output,
			...object.output ? [object.output] : [],
		),
	}
}
$['gulp'].task('livereload',
	unit({
		name: 'livereload',
		folder: options.folders.output,
	}),
)
$['gulp'].task('server-spdy',
	unit({
		name: 'server-spdy',
		folder: options.folders.output,
		port: options.port,
	}),
)
$['gulp'].task('server',
	unit({
		name: 'server',
		folder: options.folders.output,
		port: options.port,
	}),
)
$['gulp'].task('source-assets',
	task({
		name: 'source-assets',
		folders: folders({
			source: 'assets',
		}),
	}, $['ansi-colors-lazy'].red),
)
$['gulp'].task('source-images',
	task({
		name: 'source-images',
		folders: folders({
			source: 'images',
			output: 'images',
		}),
	}, $['ansi-colors-lazy'].green),
)
$['gulp'].task('source-scripts',
	task({
		name: 'source-scripts',
		folders: folders({
			source: 'scripts',
			output: 'scripts',
		}),
	}, $['ansi-colors-lazy'].yellow),
)
$['gulp'].task('source-styles',
	task({
		name: 'source-styles',
		folders: folders({
			source: 'styles',
			output: 'styles',
		}),
	}, $['ansi-colors-lazy'].cyan),
)
$['gulp'].task('source-templates',
	task({
		name: 'source-templates',
		folders: folders({
			source: 'templates',
		}),
	}, $['ansi-colors-lazy'].magenta),
)
$['gulp'].task('webpack',
	task({
		name: 'webpack',
		folders: folders({
			source: 'scripts',
		}),
	}, $['ansi-colors-lazy'].magenta),
)
$['gulp'].task('source',
	$['gulp'].parallel(
		'source-assets',
		'source-images',
		'source-styles',
		'source-templates',
		'webpack',
	),
)
