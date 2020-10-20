
import d__layouts__common from '/templates/layouts/common'
import d__style from '/templates/helpers/style'

const $ = require('react-hyperscript')

export default (props) => {
	return [
		$(d__layouts__common, {
			title: 'roshal',
			description: 'developer from saint-petersburg',
			keywords: ['developer', 'website', 'website personal', 'archlinux'],
		}, [
			$(props.blocks.section, [
				$('h1', 'archlinux'),
				$('p' + d__style('js-format-text'), [
					'profile', $('a', {
						href: 'https://www.archlinux.org',
						content: 'archlinux.org',
					}),
				]),
			]),
		]),
	]
}
