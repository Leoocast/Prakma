const glob = require('glob')

module.exports = {
    entry: {
            //Core
            // bundle1: glob.sync('../src/components/**.jsx'),
            // bundle2: ['./src/app.jsx']
            
            bundle1: glob.sync('../src/components/test/**.jsx'),
            bundle2: ['./src/appTest.jsx']
        },
    watch: true,
    output: {
        path: './build',
        // filename: "appBundle.js",
        filename: "appTestBundle.js",
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