
import * as m__helpers from '/commons/helpers'

import d__layouts__common from '/components/layouts/common'

const s__styles = require('./styles.sass')

const $ = require('react-hyperscript')

const style = m__helpers.styler(s__styles)

export default (props: {}) => {
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
