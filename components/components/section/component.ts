
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '/commons/helpers'
import s__styles from '/styles/common.sass'

const style = m__helpers.styler(s__styles)

const c__og: p__react.FC<{
	og?: Record<string, string>,
}> = (props) => {

	if (props.og == null) {
		return null
	}

	const array = ['description', 'image', 'title', 'type', 'url']

	return $([
		...array.map((value) => {
			return $([
				...props.og?.[value] ? [
					$('meta', {
						property: ['og', value].join(':'),
						content: props.og[value],
					}),
				] : [],
			])
		}),
	])

}

const component: p__react.FC = (props = {}) => {

	return $([
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
	])

}

export default component
