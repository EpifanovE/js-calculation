const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: '../dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
         title: 'Output Management',
         title: 'Development',
        }),
      ],
});