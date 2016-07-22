var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.join(__dirname, '..', 'src', 'index.html')
});


var config = {
    resolve: {
        root: [
            path.join(__dirname, '..', 'node_modules'),
            path.join(__dirname, '..', 'src'),
            path.join(__dirname, '..', 'src/components'),
            path.join(__dirname, '..', 'src/components/app'),
            path.join(__dirname, '..', 'src/components/profile_photo'),
            path.join(__dirname, '..', 'src/components/introduction'),
            path.join(__dirname, '..', 'src/components/main_container')
        ],
        extensions: ['', '.js', '.jsx', '.css']
    },

    entry: 'main.js',

    output: {
        path: __dirname+ '/../build',
        filename:'index.js'
    },

    devServer: {
        contentBase: __dirname+ '/../build',
        inline: true,
        port: 8090
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
            }
        ]
    },

    plugins: [HTMLWebpackPluginConfig, new ExtractTextPlugin("styles.css")]
}

module.exports = config;