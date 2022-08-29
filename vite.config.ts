/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 15:42:39
 * @LastEditors: yft
 * @LastEditTime: 2022-08-29 17:44:15
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

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
			dirs: ['src/components'],
			// 搜索子目录
			deep: true,
			// 组件的有效文件扩展名。
			extensions: ['vue'],
			// 配置文件生成位置
			dts: false, //  'src/types/components.d.ts'
			// ui库解析器
			resolvers: [
				AntDesignVueResolver() // ant-design-vue
				// ElementPlusResolver(), // Element Plus
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
		AutoImport({
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
			dts: false, //	 'src/types/auto-import.d.ts'
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
				target: 'your https address',
				changeOrigin: true,
				rewrite: (path: string) => path.replace(/^\/api/, '')
			}
		}
	}
})
