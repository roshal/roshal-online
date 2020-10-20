
import * as p__react from 'react'

import * as m__helpers from '~/commons/helpers'

import * as m__components from './components'
import * as m__types from './types'

const s__styles = require('./styles.sss')

const $ = require('react-hyperscript')

const style = m__helpers.styler(s__styles)

const c__og = (props) => {
	if (props.og == null) {
		return null
	}
	return ['description', 'image', 'title', 'type', 'url'].map((value) => {
		return [
			props.og['value'] && $('meta', {
				property: ['og', value].join(':'),
				content: props.og[value],
			}),
		]
	})
}

const style = (value) => {
	return ['.', value].join('')
}

export default (props = {}) => {
	return [
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
	]
}
