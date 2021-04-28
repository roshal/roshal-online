
import * as $ from 'react-hyperscript'
import * as p__react from 'react'

import * as m__helpers from '/commons/helpers'
import d__layouts__common from '/components/layouts/common'
import s__styles from '/styles/common.sass'

const style = m__helpers.styler(s__styles)

const component: p__react.FC<{
	blocks: {
		section: any,
	},
}> = (props) => {

	return $([
		$(d__layouts__common, {
			title: 'roshal',
			description: 'developer from saint-petersburg',
			keywords: ['developer', 'website', 'website personal', 'github'],
		}, [
			$(props.blocks.section, [
				$('h1', 'github'),
				$('p' + style('js-format-text'), [
					'profile', $('a', {
						href: 'https://github.com/roshal',
						content: '@roshal',
					}),
				]),
			]),
		]),
	])

}

export default component
