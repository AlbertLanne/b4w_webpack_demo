const webpack = require('webpack');

const config = {
    entry: './public/my_project.js',
    output: {
        path: __dirname,
        filename: './public/my_project.bundle.js'
    },
    devtool: 'source-map',
    module: {
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: true
           })
    ],
    devServer: {
        index: './public/index.html',
        openPage: './public/index.html',
        open: true
    }
};

module.exports = config;