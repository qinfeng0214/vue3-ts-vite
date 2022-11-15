/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 15:50:05
 * @LastEditors: yft
 * @LastEditTime: 2022-11-15 16:33:04
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'Index',
		meta: {
			title: '首页',

			requireAuth: true
		},
		component: () => import('@/pages/index.vue')
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录',
			requireAuth: false
		},
		component: () => import('@/pages/user/login.vue')
	},
	{
		path: '/qinghua',
		name: 'Qinghua',
		meta: {
			title: '情话',
			icon: '<icon-menu />',
			requireAuth: true
		},
		component: () => import('@/pages/test/index.vue')
	},
	{
		path: '/goods',
		name: 'Goods',
		meta: {
			title: '商品',
			icon: '<icon-menu />',
			requireAuth: false
		},
		component: () => import('@/pages/test/index.vue'),
		children: [
			{
				path: 'add',
				name: 'Add',
				component: () => import('@/pages/test/index.vue'),
				meta: { title: '添加商品' }
			},
			{
				path: 'delete',
				name: 'Delete',
				component: () => import('@/pages/test/index.vue'),
				meta: { title: '删除商品' }
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
	routes
})
export default router
