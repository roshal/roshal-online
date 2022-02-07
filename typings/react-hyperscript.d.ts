
import type * as react from 'react'

declare namespace $ {}

declare function $(
	children?: react.ReactNode | react.ReactNode[]
): react.ReactElement

declare function $(
	componentOrTag: react.ComponentClass | react.FunctionComponent | string,
	children?: react.ReactNode | react.ReactNode[]
): react.ReactElement

declare function $<P>(
	componentOrTag: react.ComponentClass<P> | react.FunctionComponent<P> | string,
	children?: react.ReactNode | react.ReactNode[]
): react.ReactElement<P>

declare function $<P>(
	componentOrTag: react.ComponentClass<P> | react.FunctionComponent<P> | string,
	properties: P,
	children?: react.ReactNode | react.ReactNode[]
): react.ReactElement<P>

export = $
