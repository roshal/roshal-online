
import * as $ from 'react-hyperscript'

import * as m__helpers from '/templates/commons/helpers'
import d__layouts__common from '/templates/layouts/common'

import s__styles from './styles.sass'

const style = m__helpers.styler(s__styles)

export default (props: {
	blocks: {
		section: any,
	},
}) => {
	return [
		$(d__layouts__common, {
			title: 'roshal',
			description: 'developer from saint-petersburg',
			keywords: ['developer', 'website', 'website personal', 'telegram'],
		}, [
			$(props.blocks.section, [
				$('h1', 'telegram'),
				$('p' + style('js-format-text'), [
					'profile', $('a', {
						href: 'https://t.me/roshal',
						content: '@roshal',
					}),
				]),
			]),
		]),
	]
}
