
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '/commons/helpers'
import d__layouts__common from '/components/layouts/common'
import s__styles from '/styles/common.sass'

const style = m__helpers.styler(s__styles)

const component: p__react.FC = (props = {}) => {

	return $([
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
	])

}

export default component
