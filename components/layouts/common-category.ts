
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '/commons/helpers'
import d__layouts__common from '/components/layouts/common'
import s__styles from '/styles/common.sass'

const style = m__helpers.styler(s__styles)

const component: p__react.FC<{
	title: string,
}> = (props) => {
	return $([
		$(d__layouts__common, {
			title: props.title + ' &mdash; Аренда в Санкт-Петербурге',
		}, [
			$(table, {
				...props,
			}),
		]),
	])
}

export default component

const table: p__react.FC<{
	items?: any,
	properties?: any,
	title: string,
}> = (props) => {
	if (props.properties == false && props.items == false) {
		return
	}
	return $([
		$('div' + style('block_scroll'), [
			$('div' + style('block_scroll-content'), [
				$('table' + style('table', 'block_scroll-table'), [
					props.properties && [
						$('tr' + style('table-row'), [
							$('th' + style('table-cell', 'table-cell--header'), 'Название'),
							...props.properties?.map((value) => {
								return [
									$('th' + style('table-cell', 'table-cell--header'), value),
								]
							}),
						]),
					],
					...props.items?.map((props) => {
						return [
							$('tr' + style('table-row'), [
								props.link ? [
									$('td' + style('table-cell'), $('span' + style('nowrap'), $('a', {
										href: props.link,
									}, props.name))),
								] : [
									$('td' + style('table-cell'), $('span' + style('nowrap'), props.name)),
								],
								props.properties?.map((value) => {
									return [
										$('td' + style('table-cell'), $('span' + style('nowrap'), value)),
									]
								}),
							]),
						]
					}),
				]),
			]),
		]),
	])
}
