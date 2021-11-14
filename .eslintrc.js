module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'commonjs': true,
		'es6': true,
		'amd': true
	},
	'parser': 'vue-eslint-parser',
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended'
	],
	'parserOptions': {
		'ecmaVersion': 13,
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'html',
		'@typescript-eslint'
	],
	'rules': {
		'comma-dangle': ['error', 'never'],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'@typescript-eslint/no-var-requires': 0,
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
