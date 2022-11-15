/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 15:42:39
 * @LastEditors: yft
 * @LastEditTime: 2022-11-15 16:52:49
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite' // 不加这个配置，ElMessage出不来

export default defineConfig({
	resolve: {
		//设置别名
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	plugins: [
		vue(),
		Components({
			// // 用于搜索组件的目录的相对路径
			dirs: ['src/components', 'src/layout'],
			// 搜索子目录
			deep: true,
			// 组件的有效文件扩展名。
			extensions: ['vue'],
			// 配置文件生成位置
			// dts: false,
			dts: 'src/types/components.d.ts',
			// ui库解析器
			resolvers: [
				// AntDesignVueResolver() // ant-design-vue
				ElementPlusResolver({
					importStyle: 'sass'
				}) // Element Plus
				// VantResolver(), // Vant
			],
			include: [/\.vue$/, /\.vue\?vue/],
			exclude: [
				/[\\/]node_modules[\\/]/,
				/[\\/]\.git[\\/]/,
				/[\\/]\.husky[\\/]/,
				/[\\/]\public[\\/]/
			]
		}),

		ElementPlus(), // 用于内部方法调用，样式缺失的现象，如 ElMessage 等

		AutoImport({
			resolvers: [ElementPlusResolver()],
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/ // .md
			],
			imports: [
				'vue',
				'vue-router',
				'pinia',
				{
					'@vueuse/core': [
						// import { useDebounceFn } from '@vueuse/core',
						'useDebounceFn',
						'useThrottleFn',
						'useTimeoutPoll'
						// 设置别名
						// ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
					],
					axios: [['default', 'axios']]
				}
			],
			// 配置文件生成位置
			// dts: false,
			dts: 'src/types/auto-import.d.ts',
			eslintrc: {
				// 新增依赖需设置enabled:true,重新生成json文件
				enabled: true, // Default `false`
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			}
		})
	],
	server: {
		port: 8080, //启动端口
		hmr: {
			host: 'localhost',
			port: 8080
		},
		open: true,
		// 设置 https 代理
		proxy: {
			'/api': {
				target: 'https://api.uomg.com/',
				changeOrigin: true,
				rewrite: (path: string) => path.replace(/^\/api/, '/api')
			}
		}
	},
	css: {
		preprocessorOptions: {
			// 覆盖掉element-plus包中的主题变量文件
			scss: {
				additionalData: '@use "@/styles/element/index.scss" as *;'
			}
		}
	}
})
