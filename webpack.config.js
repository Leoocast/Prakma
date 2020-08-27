const glob = require('glob')

module.exports = {
    entry: {
        bundle1: glob.sync('../src/components/**.jsx'),
        bundle2: ['./src/app.jsx']
        },
        
    watch: true,
    output: {
        path: './build',
        filename: "appBundle.js",
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=Comp'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}