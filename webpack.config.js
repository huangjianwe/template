const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development',
	devtool: "source-map",
  entry: './index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', "@babel/preset-react"]
					}
				}
			}
		]
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].js"
  },
	devServer: {
		static: [
			{
        directory: path.join(__dirname),
				watch: {
					ignored: '*.js',
					usePolling: false,
				}
      }
    ],
		open: true,
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      cache: true,
    })
	],
};