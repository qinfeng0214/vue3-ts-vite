<!--
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 17:48:46
 * @LastEditors: yft
 * @LastEditTime: 2022-08-25 16:50:46
-->
<template>
	<div>
		<a-input></a-input>
		<a-button type="primary">登录</a-button>
	</div>
</template>

<script lang="ts" setup>
	const params = reactive({ username: '', password: '' })
	console.log(params)
</script>
