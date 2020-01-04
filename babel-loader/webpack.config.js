const { ProgressPlugin } = require('webpack')
const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'web',
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: resolve(__dirname, './build'),
        filename: '[name][hash].js'
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    }
}