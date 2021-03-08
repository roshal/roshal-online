
const concurrent = require('nps-utils').concurrent.nps
const series = require('nps-utils').series.nps

const nps = exports.scripts = {}

nps.analyze = series('serve.analyze')
nps.develop = series('serve.develop')
nps.produce = series('serve.produce')

nps.release = series('clean', 'build.produce', 'firebase.deploy')

nps.lint = concurrent('eslint', 'stylelint')
nps.test = series('jest')

nps.clean = 'rimraf public/*'

nps.nodemon = 'nodemon -e js -w webpack -x webpack serve --env develop --hot'

nps.build = {
	analyze: 'webpack --env analyze',
	develop: 'webpack --env develop',
	produce: 'webpack --env produce',
}

nps.serve = {
	analyze: 'webpack serve --env analyze --hot',
	develop: 'webpack serve --env develop --hot',
	produce: 'webpack serve --env produce --hot',
}

nps.watch = {
	analyze: 'webpack --env analyze --watch',
	develop: 'webpack --env develop --watch',
	produce: 'webpack --env produce --watch',
}

nps.firebase = {
	deploy: 'firebase deploy',
	login: {
		reauth: 'firebase login --reauth',
	},
	serve: 'firebase serve',
}

nps.eslint = {
	fix: 'eslint --fix source webpack',
}

nps.stylelint = {
	fix: 'stylelint --fix styles source/**/*.sass',
}

nps.jest = {
	watch: 'jest --watch source',
}

nps.eslint.default = 'eslint source webpack'
nps.firebase.login.default = 'firebase login'
nps.jest.default = 'jest source'
nps.stylelint.default = 'stylelint styles source/**/*.sass'
