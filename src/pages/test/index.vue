<!--
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-09-05 14:56:13
 * @LastEditors: yft
 * @LastEditTime: 2022-11-02 15:37:12
-->
<template>
	<div>{{ data?.content }}</div>
	<el-button type="primary">Primary</el-button>
</template>
<script lang="ts" setup>
	import { useRequest } from '@/hooks/useRequest'
	import { getLoveApi } from './service/index'
	const getLoveResult = (data: any) => {
		return useRequest(getLoveApi, data)
	}
	const { data, run, runParams, loading }: any = getLoveResult('json')
	console.log('useRequest:', data, run, runParams, loading)
</script>
