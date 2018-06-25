const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCssWebpack = require('purifycss-webpack')
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const pluginsConfig = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        template: './src/index1/index.html',
        filename: 'index1/index.html',
        hash: true,
        // excludeChunks: ['index2']
        chunks: ['runtime', 'commons', 'commonsAsync', 'index1']
    }),
    new HtmlWebpackPlugin({
        template: './src/index2/index.html',
        filename: 'index2/index.html',
        hash: true,
        // excludeChunks: ['index1', 'index2', 'index3']
        chunks: ['runtime', 'commons', 'jquery', 'commonsAsync', 'index2']
    }),
    // new HtmlWebpackPlugin({
    //     template: './src/index3/index.html',
    //     filename: 'index3/index.html',
    //     hash: true,
    //     chunks: ['index3']
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({filename: 'css/[name].optimize.css'}),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    }),
    new PurifyCssWebpack({
        paths: glob.sync(path.join(__dirname, '../src/**/*.html'))
    }),
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../src/assets'),
        to: './public'
    }]),
    // new webpack.ProvidePlugin({
    //     lodash: 'lodash',
    //     jquery: 'jquery'
    // })
]

module.exports = pluginsConfig