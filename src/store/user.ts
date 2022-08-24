/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 15:53:33
 * @LastEditors: yft
 * @LastEditTime: 2022-08-24 16:20:41
 */
import { defineStore } from "pinia"

export const useUserStore = defineStore({
	id: "user",
	state: () => {
		return {
			name: "张三",
		}
	},
	actions: {
		updateName(name: string) {
			this.name = name
		},
	},
})
