
import * as $ from 'react-hyperscript'

import * as m__helpers from '/commons/helpers'

import s__styles from './styles.sass'

const style = m__helpers.styler(s__styles)

const c__og = (props) => {
	if (props.og == null) {
		return null
	}
	return ['description', 'image', 'title', 'type', 'url'].map((value) => {
		return [
			props.og['value'] && [
				$('meta', {
					property: ['og', value].join(':'),
					content: props.og[value],
				}),
			],
		]
	})
}

export default (props = {}) => {
	return [
		$('header' + style('section-header'), [
			$('div' + style('section-header--container'), [
				$('div' + style('section-header--content'), [
					$('ul' + style('section-header--list'), [
						$('li' + style('section-header--list-item'), [
							$('a', {
								href: '/',
								title: 'roshal',
							}, 'root'),
						]),
					]),
				]),
			]),
		]),
	]
}
