const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello,webpack.js',
            template: './public/index.html'
        })
    ]
}