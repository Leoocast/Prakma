module.exports = {
    entry: {bundle1:['./src/app.jsx','./src/components/header.jsx']},
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