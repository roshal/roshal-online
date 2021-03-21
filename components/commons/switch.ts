
import * as $ from 'react-hyperscript'
import * as p__react from 'react'
import * as p__react_router_dom from 'react-router-dom'

import d__index from '/components/index'
import d__pages__telegram from '/components/pages/telegram'

const component: p__react.FC<{
	head: {
		assets?: {
			css: string[], js: string[],
		},
		path?: string,
	},
}> = (props) => {
	return $([
		$(p__react_router_dom.Switch, [
			$(p__react_router_dom.Route, {
				exact: true,
				path: '/',
			}, [
				$(d__index, {
					assets: props.head.assets,
				}),
			]),
			$(p__react_router_dom.Route, {
				path: '/telegram',
			}, [
				$(d__pages__telegram, {
					assets: props.head.assets,
				}),
			]),
		]),
	])
}

export default component
