
import d__layouts__common from './layouts/common'

const $ = require('react-hyperscript')

export default (props) => {
	return [
		$(d__layouts__common, {
			title: props.title + ' &mdash; Аренда в Санкт-Петербурге',
		}, [
			table(props),
		]),
	]
}

const table = (props) => {
	if (!props.properties && !props.items) {
		return
	}
	return [
		$('div.block_scroll', [
			$('div.block_scroll-content', [
				$('table.table.block_scroll-table', [
					props.roperties && [
						$('tr.table-row', [
							$('th.table-cell.table-cell--header', 'Название'),
							...props.roperties.map((value) => {
								return [
									$('th.table-cell.table-cell--header', value),
								]
							}),
						]),
					],
					...props.items && props.items.map((props) => {
						return [
							$('tr.table-row', [
								props.link ? [
									$('td.table-cell', $('span.nowrap', $('a', {
										href: props.link,
									}, props.name))),
								] : [
									$('td.table-cell', $('span.nowrap', props.name)),
								],
								props.properties.map((value) => {
									return [
										$('td.table-cell', $('span.nowrap', value)),
									]
								}),
							]),
						]
					}),
				]),
			]),
		]),
	]
}
