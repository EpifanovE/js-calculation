const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");
const path = require('path');

let entry = path.resolve(__dirname, '../src/tests');

module.exports = {
    mode: "development",
    entry: ["./src/tests", "webpack-plugin-serve/client"],
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
        ]
    },
    plugins: [
        new WebpackPluginServe({
            port: process.env.PORT || 8080,
            static: "./dist",
            waitForBuild: true,
        }),
        new MiniHtmlWebpackPlugin(),
    ],
};