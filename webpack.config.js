const path = require('path')
const baseConfig = require('./config/base.config.json')
const loaderRules = require('./config/loader.rules.config.js')
const pluginsConfig = require('./config/plugins.config.js')
const devServerConfig = require('./config/devServer.config.js')

module.exports = {
    entry: {
        index1: path.resolve(__dirname, baseConfig.entry1),
        index2: path.resolve(__dirname, baseConfig.entry2),
        // index3: baseConfig.entry3,
        // jquery: 'jquery'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: loaderRules,
    plugins: pluginsConfig,
    optimization: {
        runtimeChunk: "single",   //去除build后出口文件中webpack相关代码
        splitChunks: {
            minChunks: 2,   //只有被2个以上组件同时引用的情况下，才会被提取
            minSize: 0,  //提取前该模块只有大于此参数，模块才会被提取
            // maxInitialRequests: 3,  //入口最大的并行请求数
            maxAsyncRequests: 5,   //异步请求的chunks不应该超过此值
            automaticNameDelimiter: '-',  //提取代码文件名的连字符
            cacheGroups: {
                commonsAsync: {
                    chunks: 'async',
                    minChunks: 1,
                    name: 'commonsAsync',   //提取的模块名
                    test: /js/,   //值类型：RegExp、String和Function，在这里匹配正则才会被提取
                },
                commons: {
                    chunks: 'initial',
                    name: 'commons',   //提取的模块名
                    test: /js/,   //值类型：RegExp、String和Function，在这里匹配正则才会被提取
                    priority: 10
                },
                // util: {
                //     chunks: 'initial',
                //     name: 'util',
                //     test: /js/,
                //     priority: 11
                // },
                jquery: {
                    chunks: 'initial',
                    name: 'jquery',
                    minChunks: 1,
                    test: /jquery/
                }
            }
        }
    },
    devServer: devServerConfig,
    mode: 'development'
}