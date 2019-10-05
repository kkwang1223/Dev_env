const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //entry file
    entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
    // compile, bundled js file enroll saving path & name
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js',
    },
    // plugin: [
    //     // compile, bundled CSS file enroll saving path & name
    //     new MiniCssExtractPlugin({ filename: 'css/style.css' })
    // ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // create style nodes from JS strings
                    // MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    // 'sass-loader?outputStyle=expanded',
                    // 'sass-loader?outputStyle=compressed'
                ],
                exclude: /node_modules/
            },
        ]
    },
    devtool: 'source-map',
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development',
};