/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 15:50:05
 * @LastEditors: yft
 * @LastEditTime: 2022-09-05 15:16:20
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录',
			keepAlive: true,
			requireAuth: false
		},
		component: () => import('@/pages/user/login.vue')
	},
	{
		path: '/',
		name: 'Index',
		meta: {
			title: '首页',
			keepAlive: true,
			requireAuth: true
		},
		component: () => import('@/pages/index.vue')
	},
	{
		path: '/qinghua',
		name: 'qinghua',
		component: () => import('@/pages/test/index.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})
export default router
