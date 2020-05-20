const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dest'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test:/\.vue$/,
            use:'vue-loader',
            exclude: /node_modules/
        }, {
            // 文件大小<8192KB, 以base64的方式加载图片; 文件大小>8192KB, 以请求的方式加载图片
            test: /\.(png|jpg|gif|svg)(\?[a-z0-9\-=]+)?$/,
            use: [{
                loader: 'url-loader',// 单位：KB
                options: {
                    limit: '8192',
                    outputPath: 'images/',
                    name: '[hash:8].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin('dest',  {
            root: path.resolve(__dirname, '../')   // 根目录
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'my-app',
            filename: 'index.html',
            template: 'index.ejs',
            inject: 'body',
            favicon: path.join(__dirname, '../assets/img/favicon.ico')
            // minify: {"removeComments": true, "collapseWhitespace": true},//压缩
            // chunksSortMode: 'none',
            // banner: {
            //     branch: gitRevision('branch'),
            //     tag: gitRevision('tag'),
            // },
        })
    ],
    performance: {
        // 配置如何展示性能提示
        hints: 'warning',
        maxAssetSize: 30000000,
        maxEntrypointSize: 50000000
    }
}