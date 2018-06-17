const path = require('path')
const baseConfig = require('./config/base.config.json')
const loaderRules = require('./config/loader.rules.config.js')
const pluginsConfig = require('./config/plugins.config.js')
const devServerConfig = require('./config/devServer.config.js')

module.exports = {
    entry: {
        index1: baseConfig.entry1,
        index2: baseConfig.entry2,
        lodash: baseConfig.library1,
        jquery: baseConfig.library2
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: loaderRules,
    plugins: pluginsConfig,
    optimization: {
        splitChunks: {
            cacheGroups: {
                lodash: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'lodash',
                    enforce: true
                },
                jquery: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'jquery',
                    enforce: true
                }
            }
        }
    },
    devServer: devServerConfig,
    mode: 'development'
}