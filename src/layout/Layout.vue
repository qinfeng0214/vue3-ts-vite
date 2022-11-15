<!--
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-11-02 15:48:37
 * @LastEditors: yft
 * @LastEditTime: 2022-11-15 16:51:31
-->
<template>
	<div class="layout">
		<el-container class="container">
			<el-aside class="aside">
				<!--系统名称+logo-->
				<div class="head">
					<div>
						<img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo" />
						<span v-if="isCollapse">vue3 admin</span>
					</div>
				</div>
				<!--一条为了美观的线条-->
				<div class="line" />
				<el-menu
					background-color="#222832"
					text-color="#fff"
					active-text-color="#0a60bd"
					:router="true"
					default-active="/index"
					:unique-opened="true"
					@open="handleOpen"
					@close="handleClose"
				>
					<!--一级栏目-->
					<template v-for="item in routerInfo" :key="item.path + ''">
						<!--	存在children	-->
						<el-sub-menu v-if="item?.children?.length > 0" :index="item.path">
							<template #title>
								<el-icon>{{ item?.icon }}</el-icon>
								<span>{{ item.meta.title }}</span>
							</template>
							<template v-for="subitem in item.children" :key="subitem.path">
								<el-menu-item
									v-if="subitem.path !== '/'"
									:index="item.path + '/' + subitem.path"
									@click="handleMenuItemClick(subitem)"
									>{{ subitem.meta.title }}</el-menu-item
								>
							</template>
						</el-sub-menu>
						<!--	不存在children	-->
						<el-menu-item v-else :index="item.path">
							<el-icon>{{ item?.icon }}</el-icon>
							<span>{{ item.meta.title }}</span>
						</el-menu-item>
					</template>
				</el-menu>
			</el-aside>
			<el-container class="content">
				<Header />
				<div class="main">
					<RouterView />
				</div>
				<Footer />
			</el-container>
		</el-container>
	</div>
</template>
<script lang="ts" setup>
	const isCollapse = ref(true)

	const router = useRouter()
	const routerInfo: any = router.options.routes.filter(
		item => item.path !== '/' && item.path !== '/login'
	)

	console.log('routerInfo', routerInfo)

	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath)
	}

	const handleMenuItemClick = (item: any) => {
		console.log('handleMenuItemClick-->item:', item)
	}
</script>

<style scoped>
	.layout {
		min-height: 100vh;
		background-color: #ffffff;
	}
	.container {
		height: 100vh;
	}
	.aside {
		width: 200px !important;
		background-color: #222832;
	}
	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
	}
	.head > div {
		display: flex;
		align-items: center;
	}

	.head img {
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}
	.head span {
		font-size: 20px;
		color: #ffffff;
	}
	.line {
		border-top: 1px solid hsla(0, 0%, 100%, 0.05);
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	.content {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
		overflow: hidden;
	}
	.main {
		height: 100vh;
		overflow: auto;
		padding: 10px;
	}
</style>
