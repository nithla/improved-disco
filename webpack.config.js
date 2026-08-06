const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            api: 'modern',
                            additionalData: (content, loaderContext) => {
                                if (loaderContext.resourcePath.endsWith('variables.scss')) {
                                    return content;
                                }
                                return `
                                @use "variables.scss" as *;
                                ${content}
                              `;
                            }
                        },
                    },
                ],
                exclude: [/node_modules/],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|webp|jpeg|gif|doc|txt|docx|php|pdf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Nithila welcomes you!',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
}