/* eslint-env node, mocha */
const env = process.env.NODE_ENV || 'dev';
const path = require('path');
require('dotenv').config({ path: `${env}.env` });
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './src/tmp-index.html'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new Dotenv({
        path: `${env}.env`
    })
];

module.exports = {
    mode: 'development',
    entry: ['./src/app.js'],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    'presets': ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                        ['@babel/plugin-proposal-class-properties', { 'loose': true }]
                    ]
                }
            },
            {
                test: /css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    }
                ]
            },
        ]
    },
    plugins: plugins
};