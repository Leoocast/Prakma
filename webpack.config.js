const path = require('path')

const config = {
    entry: {
        home: path.resolve('./src/views/home/home.app.jsx'),
    },
    mode: 'development',
    watch: true,
    output: {
        path: path.resolve('./dist/js'),
        filename: "[name]/[name].js",
    },
	module: {
	    rules: [
            {
              test: /\.sass$/i,
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
		extensions: ['.js', '.jsx', 'sass']
  },
}

module.exports = config