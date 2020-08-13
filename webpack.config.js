// initialize modules
const PATH = require("path")
const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin")
const MINI_CSS_EXTRACT_PLUGIN = require("mini-css-extract-plugin")
// initialize path and filename dirs to constant obj as props
const INPUTS = {
    source: PATH.resolve(__dirname, 'src')
}

const OUTPUTS = {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'index.js'
}
// entry building configs
module.exports = {
    entry: INPUTS.source + '/source.js',
    output: {
        path: OUTPUTS.path,
        filename: OUTPUTS.filename
    },
    plugins: [
        new HTML_WEBPACK_PLUGIN({
            filename: 'index.html',
            template: INPUTS.source + '/source.pug' 
        }),
        new HTML_WEBPACK_PLUGIN({
            filename: 'test.html',
            template: INPUTS.source + '/test.pug' 
        }),
        new MINI_CSS_EXTRACT_PLUGIN({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },  {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },  {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    MINI_CSS_EXTRACT_PLUGIN.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },  {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            },  {
                test: /\.css$/i,
                use: [MINI_CSS_EXTRACT_PLUGIN.loader, 'css-loader']
            }
        ]
    },
    devServer: {
        overlay: true
    }
}