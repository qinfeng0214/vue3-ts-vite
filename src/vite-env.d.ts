/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 17:48:46
 * @LastEditors: yft
 * @LastEditTime: 2022-08-25 16:01:00
 */
/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}
