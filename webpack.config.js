const path = require('path')
const views = require('./webpack.config.views')

const config = {
    entry: views,
    mode: 'development',
    watch: true,
    output: {
        path: path.resolve('./dist/js'),
        filename: "[name]/[name].js",
    },
	module: {
	    rules: [
            {
              test: /\.(css|sass)$/i,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ],
            },
                {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader"
                  }
                },
          ],
        },
	resolve: {
		extensions: ['.js', '.jsx', 'css', 'sass']
  },
}

module.exports = config