/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-09-05 14:57:30
 * @LastEditors: yft
 * @LastEditTime: 2022-09-05 15:23:00
 */
import request from '@/utils/request'

interface IGetParams {
	format: any
}
interface IGetRes {
	code: string
	content: string
	msg: string
}

export const getLoveApi = (format: IGetParams) => {
	return request<IGetParams, IGetRes>({
		url: '/api/rand.qinghua',
		method: 'GET',
		data: { format }
	})
}
