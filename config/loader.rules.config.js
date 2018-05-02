const ExtractTextPlugin = require('extract-text-webpack-plugin')

const rules = {
    rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader'],
                publicPath: '../'
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader', 'postcss-loader'],
                publicPath: '../'
            })
        },
        {
            test: /\.(jpe?g|png|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        outputPath: 'images'
                    }
                }
            ]
        },
        {
            test: /\.(eot|ttf|woff|svg)$/,
            use: 'file-loader'
        },
        {
            test: /\.(htm|html)$/,
            use: 'html-withimg-loader'
        },
        {
            test:/\.(js|jsx)$/,
            use:['babel-loader'],
            include: /src/,
            exclude:/node_modules/
        }
    ]
}

module.exports = rules