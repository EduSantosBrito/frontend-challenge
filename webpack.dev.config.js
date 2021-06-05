const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const DotenvWebpackPlugin = require('dotenv-webpack');

const config = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        publicPath: '/',
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.svg$/i,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                },
                            ],
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: true,
                                },
                            ],
                            ['babel-plugin-styled-components'],
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            icons: path.resolve(__dirname, './public/icons'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new DotenvWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '../dist/',
                    globOptions: {
                        ignore: ['**/*.html'],
                    },
                },
            ],
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
    },
};

module.exports = config;
