
const concurrent = require('nps-utils').concurrent.nps

const series = require('nps-utils').series.nps

const nps = {}

exports.scripts = nps

nps.develop = concurrent('watch.develop', 'serve.develop')
nps.produce = concurrent('watch.produce', 'serve.produce')

nps.release = series('clean', 'build.produce', 'firebase.deploy')

nps.clean = 'rimraf public/*'

nps.lint = concurrent('eslint', 'stylelint')
nps.test = series('jest')

nps.build = {
	develop: 'webpack --env develop',
	produce: 'webpack --env produce',
}

nps.watch = {
	develop: 'webpack --env develop --watch',
	produce: 'webpack --env produce --watch',
}

nps.serve = {
	develop: 'webpack --env develop serve',
	produce: 'webpack --env produce serve',
}

nps.nodemon = 'nodemon -e js -w webpack -x webpack-dev-server --hot --develop'

nps.firebase = {
	deploy: 'firebase deploy',
	login: {
		default: 'firebase login',
		reauth: 'firebase login --reauth',
	},
	serve: 'firebase serve',
}

nps.eslint = {
	default: 'eslint source webpack',
	fix: 'eslint --fix source webpack',
}

nps.stylelint = {
	default: 'stylelint source/**/*.ss',
	fix: 'stylelint --fix source/**/*.ss',
}