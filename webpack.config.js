const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.m?jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: { 
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				},
			},
			{
				test: /\.(png|gif|jpg)$/,
				use: [
					{
						loader : 'file-loader',
						options: {
							name: 'assets/[hash].[ext]'
						}
					}
				]
			}
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		}),
		new copyWebpackPlugin({
			patterns: [
				{from:"./src/styles/mobile.css", to: ''},
				{from:"./src/styles/tablet.css", to: ''},
				{from:"./src/utils/scroll-reveal.js", to: ''}
			]
		}),
	],
}
