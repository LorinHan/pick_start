const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 导入在内存中自动生成html页面的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 创建一个插件的实例对象：
const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './src/index.html'),// 源文件路径
	filename: 'index.html' // 生成的首页的文件名
});

// 向外暴露一个打包的配置对象
module.exports = {
	mode: 'development',  // development | production
	// 在webpack4中有一个很大的特性，约定大于配置，约定默认的打包入口路径是 是src下的index.js
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/dist'),
		chunkFilename: 'chunks/[name].chunk.js'
	},
	plugins: [
		htmlPlugin,
		new ExtractTextPlugin({
			filename: './css/style.css', // 从 .js 文件中提取出来的 .css 文件的名称
			allChunks: true	// 这句一定要加,不然vue-router的异步组件技术会报错
		  })
	],
	module: {  // 所有第三方模块
		rules: [
			{test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
			{test: /\.css$/, use: ExtractTextPlugin.extract({
				use: ['css-loader']
			  })},
			{test: /\.less$/, use: ExtractTextPlugin.extract({
				use: ['css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']
			})},
			{test: /\.jpg|jpeg|png|gif$/, use: 'url-loader?limit=900&name=images/[hash:8].[name].[ext]'},
			{test: /\.ttf|woff2|woff|eot|svg$/, use: 'url-loader'}
		]
	},
	devServer: {
		contentBase: './dist',
		progress: false,
		compress: true,
		port: 8080,
		proxy: {
		  '/api': {
			target: 'http://127.0.0.1:5000',
			pathRewrite: {"^/api": ""} // 将/api重写为""空字符串
		  }
		}
	  }
	// externals: [
	// 	{'react': 'React'},
	// 	{'react-dom': 'ReactDOM'}
	// ],
}