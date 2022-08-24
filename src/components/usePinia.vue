<!--
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 16:00:38
 * @LastEditors: yft
 * @LastEditTime: 2022-08-24 16:35:50
-->
<template>
  <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>


import { useUserStore } from "@/store/user"

const userStore = useUserStore()

userStore.updateName("李四")
</script>
