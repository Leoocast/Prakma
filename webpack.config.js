const glob = require('glob')
const path = require('path'); // path utility

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// init HTML Webpack Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/template.html', // archivo de nuestra vista
	inject: 'body' // donde insertaremos nuestro script
})
// init Clean Webpack Plugin
const CleanWebpackPluginConfig = new CleanWebpackPlugin(['public']);

const config = {
    entry: {
        // bundle1: glob.sync('../src/components/**.jsx'),
        bundle2: glob.sync('./src/appTest.jsx'),
    },
    watch: true,
    output: {
        path: path.resolve('./build'),
        filename: "appTestBundle.js",
        publicPath: 'http://localhost:8090/assets'
    },
	module: {
	    rules: [
            {
              test: /\.sass$/i,
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
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
	// plugins: [HtmlWebpackPluginConfig, CleanWebpackPluginConfig] // configuración de nuestra vista
}

module.exports = config; //exportamos a webpack nuestra configuración