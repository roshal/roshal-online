
import { hot } from 'react-hot-loader/root'

import * as p__react from 'pretty'
import * as p__react_router_dom from 'react-router-dom'

import d__index from '/components/index'
import d__pages__telegram from '/components/pages/telegram'

const $ = require('react-hyperscript')

interface i__props {
	assets: {
		css: string[], js: string[],
	},
	path: string,
}

const component: p__react.FC = (props: i__props) => {
	console.log(9876543210, props)
	return [
		$(p__react_router_dom.StaticRouter, {
			location: props.path,
			//history: history.createBrowserHistory(),
		}, [
			$(p__react_router_dom.Switch, [
				$(p__react_router_dom.Route, {
					exact: true,
					path: '/',
				}, [
					$(d__index, {
						assets: props.assets,
					}),
				]),
				$(p__react_router_dom.Route, {
					path: '/telegram',
				}, [
					$(d__pages__telegram, {
						assets: props.assets,
					}),
				]),
			]),
		]),
	][0]
}

export default hot(component)
