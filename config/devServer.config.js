const path = require('path')

const devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 9090,
    open: true,
    hot: true
}

module.exports = devServer