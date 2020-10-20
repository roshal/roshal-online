
import d__layouts__common from './layouts/common'

const $ = require('react-hyperscript')

const style = (value) => {
	return ['.', value].join('')
}

export default (props) => {
	return [
		$(d__layouts__common, {
			title: 'error',
		}, [
			$('div' + style('section-content'), [
				$('div' + style('section-content--container'), [
					$('div' + style('section-content--content'), [
						$('div' + style('section'), [
							$('h1' + style('js-format-text'), '404 - not found'),
							$('p' + style('js-format-text'), 'the requested resource is not found'),
						]),
					]),
				]),
			]),
		]),
	]
}
