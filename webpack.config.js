var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var clientDir = __dirname + '/client';

module.exports = {
    entry: "./client/js/app.js",
    output: {
        path: __dirname + '/build',
        filename: "app.js"
    },
    resolve: {
        modulesDirectories: ['jade', 'js', 'node_modules'],
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jade", ".coffee"]
    },
    module: {
        loaders: [
            {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
           },
           {
              test: /\.jade$/,
              loader: 'jade-loader'
          },
          {
             test: /\.coffee$/,
             loader: 'coffee-loader'
         }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};
