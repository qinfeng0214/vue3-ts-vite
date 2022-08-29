/*
 * @Descripttion:
 * @Author: yft
 * @Date: 2022-08-24 16:22:48
 * @LastEditors: yft
 * @LastEditTime: 2022-08-25 16:25:38
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},

	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'./.eslintrc-auto-import.json'
	],

	rules: {
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'vue/custom-event-name-casing': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^h$',
				varsIgnorePattern: '^h$'
			}
		],
		'vue/multi-word-component-names': 0,
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^h$',
				varsIgnorePattern: '^h$'
			}
		],
		'space-before-function-paren': 'off',
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'never']
	}
}
