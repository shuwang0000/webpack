const path = require('path')
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: './',
        filename: '[name][hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(c|sc|sa)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    },
    plugins: [
        new ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            ignoreOrder: false
        }),
        new HtmlWebpackPlugin()
    ]
}