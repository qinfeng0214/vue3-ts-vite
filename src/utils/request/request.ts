/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-25 17:07:31
 * @LastEditors: yft
 * @LastEditTime: 2022-08-29 17:20:31
 */
import Request from './index'
import type { AxiosResponse } from 'axios'

import type { RequestConfig } from '@/types/shims-axios'

export interface IResponse<T> {
	statusCode: number
	desc: string
	result: T
}

// 重写返回类型
interface IRequestConfig<T, R> extends RequestConfig<IResponse<R>> {
	data?: T
}

const request = new Request({
	baseURL: import.meta.env.BASE_URL,
	timeout: 1000 * 60 * 5,
	interceptors: {
		// 请求拦截器
		requestInterceptors: config => config,
		// 响应拦截器
		responseInterceptors: (result: AxiosResponse) => {
			return result
		}
	}
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {IRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const httpRequest = <D = any, T = any>(config: IRequestConfig<D, T>) => {
	const { method = 'GET' } = config
	if (method === 'get' || method === 'GET') {
		config.params = config.data
	}
	return request.request<IResponse<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
	return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
	return request.cancelAllRequest()
}

export default httpRequest
