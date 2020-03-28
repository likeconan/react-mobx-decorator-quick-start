/* eslint-env node, mocha */

const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const publicPath = process.env.PUBLIC_PATH || '/';

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',
        path: path.resolve(__dirname, 'build'),
        publicPath
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin(
                {
                    sourceMap: true,
                    uglifyOptions: {
                        compress: {
                            inline: false
                        }
                    }
                }
            )
        ],
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
});