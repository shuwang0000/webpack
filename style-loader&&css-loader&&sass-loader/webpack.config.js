const path = require('path')
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name][hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'hello,webpack.js'
        })
    ]
}