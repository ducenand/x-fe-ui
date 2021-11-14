const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
	mode:'development',
	devtool: 'source-map',
	entry: path.resolve(__dirname,'./main.ts'),
	output: {
		path: path.resolve(__dirname,'../website-dist'),
		filename: 'bundle.js'
	},
	resolve:{
		extensions: ['.ts','.js','.vue']
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname,'index.html')
		}),
		new EslintWebpackPlugin({
			fix: true, /* 自动帮助修复 */
			extensions: ['js', 'ts','json', 'vue'],
			exclude: 'node_modules'
		})
	],
	module:{
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /.ts$/,
				use: [{
					loader: 'ts-loader',
					options: {
						appendTsSuffixTo: [/.vue$/]
					}
				}]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.jpg$/,
				type: 'asset/resource'// 对标 file-loader
			},
			{
				test: /\.(ico|gif|otf|ttf|woff|woff2|eot|gif)$/,
				type: 'asset/inline' //对标 url-loader 模块大小小于limit阈值时，输出base64
			},
			{
				test: /\.txt$/,
				type: 'asset/source' //对标 raw-loader 原封不动读出来
			},
			{
				test: /\.png$/,
				type: 'asset', // raw-loader
				parser: {
					dataUrlCondition: { // 配置阈值
						maxSize: 4 * 1024
					}
				}
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader','css-loader','sass-loader']
			}

		]
	}

};