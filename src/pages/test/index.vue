<!--
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-09-05 14:56:13
 * @LastEditors: yft
 * @LastEditTime: 2022-09-05 15:40:50
-->
<template>
	<div>{{ data?.content }}</div>
</template>
<script lang="ts" setup>
	import { useRequest } from '@/hooks/useRequest'
	import { getLoveApi } from './service/index'
	const getLoveResult = (data: any) => {
		return useRequest(getLoveApi, data)
	}
	const { data, run, runParams, loading }: any = getLoveResult('json')
</script>
