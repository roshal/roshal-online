
import * as m__helpers from '/commons/helpers'

import d__layouts__common from '/components/layouts/common'

const s__styles = require('./styles.sss')

const $ = require('react-hyperscript')

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
			keywords: ['developer', 'website', 'website personal', 'archlinux'],
		}, [
			$(props.blocks.section, [
				$('h1', 'archlinux'),
				$('p' + style('js-format-text'), [
					'profile', $('a', {
						href: 'https://www.archlinux.org',
						content: 'archlinux.org',
					}),
				]),
			]),
		]),
	]
}
