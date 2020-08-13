// initialize modules
const PATH = require("path")
const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin")
// initialize path and filename dirs to constant obj as props
const OUTPUTS = {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'index.js'
}
// entry building configs
module.exports = {
    entry: './src/source.js',
    output: {
        path: OUTPUTS.path,
        filename: OUTPUTS.filename
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        overlay: true
    }
}