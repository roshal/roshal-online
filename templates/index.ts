
import $ from 'react-hyperscript'

import * as m__helpers from '/templates/commons/helpers'
import d__layouts__common from '/templates/layouts/common'
import s__styles from '/styles/common.sass'

import m__format from '//modules/format'

const style = m__helpers.styler(s__styles)

export default (props: any = {}) => {
	return [
		$(d__layouts__common, {
			assets: props.assets,
			title: 'roshal',
			description: 'developer from saint-petersburg',
			keywords: ['developer', 'website', 'website personal'],
		}, [
			$('div' + style('section-content'), [
				$('div' + style('section-content--container'), [
					$('div' + style('section-content--content'), [
						$('div' + style('section'), [
							$('h1' + style('js-format-text'), 'title'),
							$('p' + style('js-format-text'), {
								dangerouslySetInnerHTML: {
									__html: m__format('lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua . ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . excepteur sint occaecat cupidatat non proident , sunt in culpa qui officia deserunt mollit anim id est laborum .'),
								},
							}),
							$('p' + style('js-format-text'), {
								dangerouslySetInnerHTML: {
									__html: m__format('sed ut perspiciatis , unde omnis iste natus error sit voluptatem accusantium doloremque laudantium , totam rem aperiam eaque ipsa , quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt , explicabo . nemo enim ipsam voluptatem , quia voluptas sit , aspernatur aut odit aut fugit , sed quia consequuntur magni dolores eos , qui ratione voluptatem sequi nesciunt , neque porro quisquam est , qui dolorem ipsum , quia dolor sit , amet , consectetur , adipisci velit , sed quia non numquam eius modi tempora incidunt , ut labore et dolore magnam aliquam quaerat voluptatem . ¿ ut enim ad minima veniam , quis nostrum exercitationem ullam corporis suscipit laboriosam , nisi ut aliquid ex ea commodi consequatur ? ¿ quis autem vel eum iure reprehenderit , qui in ea voluptate velit esse , quam nihil molestiae consequatur , vel illum , qui dolorem eum fugiat , quo voluptas nulla pariatur ? at vero eos et accusamus et iusto odio dignissimos ducimus , qui blanditiis praesentium voluptatum deleniti atque corrupti , quos dolores et quas molestias excepturi sint , obcaecati cupiditate non provident , similique sunt in culpa , qui officia deserunt mollitia animi , id est laborum et dolorum fuga . et harum quidem rerum facilis est et expedita distinctio . nam libero tempore , cum soluta nobis est eligendi optio , cumque nihil impedit , quo minus id , quod maxime placeat , facere possimus , omnis voluptas assumenda est , omnis dolor repellendus . temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet , ut et voluptates repudiandae sint et molestiae non recusandae . itaque earum rerum hic tenetur a sapiente delectus , ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat .'),
								},
							}),
						]),
					]),
				]),
			]),
		]),
	]
}
