const path = require('path')
const baseConfig = require('./config/base.config.json')
const loaderRules = require('./config/loader.rules.config.js')
const pluginsConfig = require('./config/plugins.config.js')
const devServerConfig = require('./config/devServer.config.js')

module.exports = {
    entry: {
        index1: baseConfig.entry1,
        index2: baseConfig.entry2
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: loaderRules,
    plugins: pluginsConfig,
    optimization: {
        runtimeChunk: "single",   //去除build后出口文件中webpack相关代码
        splitChunks: {
            // chunks (chunk) {
            //     console.log('chunk-name:'+chunk.name)
            //     return chunk.name !== 'index1';
            // },
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    name: 'commons',   //提取的模块名
                    // test: /react/,   //值类型：RegExp、String和Function，在这里匹配正则才会被提取
                    minChunks: 2,   //只有被2个以上组件同时引用的情况下，才会被提取
                    enforce: true,   //执行提取（此参数似乎必须设为true，才会执行提取，否则不会执行提取行为）
                    // minSize: 30000,  //提取前该模块只有大于此参数，模块才会被提取
                    // maxInitialRequests: 5,
                    reuseExistingChunk: true
                }
                // lodash: {
                //     test: /node_modules/,
                //     chunks: 'initial',
                //     name: 'lodash',
                //     enforce: true
                // },
                // jquery: {
                //     test: /node_modules/,
                //     chunks: 'initial',
                //     name: 'jquery',
                //     enforce: true
                // }
            }
        }
    },
    devServer: devServerConfig,
    mode: 'development'
}