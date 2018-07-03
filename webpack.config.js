const path = require('path')
const baseConfig = require('./config/base.config.json')
const loaderRules = require('./config/loader.rules.config.js')
const pluginsConfig = require('./config/plugins.config.js')
const devServerConfig = require('./config/devServer.config.js')

module.exports = {
    entry: {
        index1: path.resolve(__dirname, baseConfig.entry1),
        index2: path.resolve(__dirname, baseConfig.entry2)
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: loaderRules,
    plugins: pluginsConfig,
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            // chunks: 'all',
            minChunks: 3,
            minSize: 0,
            maxInitialRequests: 3,
            maxAsyncRequests: 2,
            automaticNameDelimiter: '-',
            cacheGroups: {
                commons: {
                    chunks(chunks) {
                        console.log('入口'+chunks.name)
                    },
                    name: 'commons',
                    test: /scripts\//,
                    priority: 10
                },
                commonsAsync: {
                    chunks: 'async',
                    minChunks: 1,
                    name: 'commonsAsync',
                    test: /util\//,
                },
                // util: {
                //     chunks: 'initial',
                //     name: 'util',
                //     test: /scripts\//,
                //     priority: 11
                // },
                // jquery: {
                //     chunks: 'initial',
                //     name: 'jquery',
                //     minChunks: 1,
                //     test: /jquery/,
                //     maxInitialRequests: 3
                // }
            }
        }
    },
    devServer: devServerConfig,
    mode: 'development'
}