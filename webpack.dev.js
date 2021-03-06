const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: { 
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', //3. Inject styles into dom
                    'css-loader', //2. turns css into commonjs
                    'sass-loader' //1. turns sass into css
                ]
            }
        ]
    }
});