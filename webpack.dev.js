/* eslint-env node, mocha */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = process.env.PORT || 3030;

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
];
if (process.env.ANALYZER) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port,
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        disableHostCheck: true,
    },
    plugins
});