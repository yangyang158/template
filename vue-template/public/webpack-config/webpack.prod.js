const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const base = require('./webpack.base.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let prodConfig = {
    mode: 'production',
    module: {  
        rules: [{
            test: /\.(le|sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    'options': {
                        publicPath: '../'
                    }
                }, 
                {
                    'loader': 'css-loader',
                    'options': {
                        sourceMap: true
                    }
                },
                { 
                    loader: 'postcss-loader', 
                    options: { 
                        ident: 'postcss',
                        sourceMap: true,
                        plugins: [
                            require('autoprefixer') // 给css添加前缀
                        ]
                    } 
                },
                {
                    'loader': 'less-loader',
                    'options': {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
		    filename: 'css/[name].[hash:8].css',
		    chunkFilename: 'css/[id].[hash:8].css'
        })
    ],
    // 优化
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    // 删除注释
                    output:{
                        comments:false
                    },
                    // 删除console debugger 删除警告
                    compress: {
                        warnings: false,
                        drop_console: true,// console
                        drop_debugger: false,
                        pure_funcs: ['console.log']// 移除console
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({}) 
        ],
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks:{
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js[x]?/
                },
                styles: {
                    name: 'styles',
                    test: /\.(less|css)$/,
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    }
}
module.exports = merge(base, prodConfig)