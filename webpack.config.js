var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./client/js/app.js",
    output: {
        path: __dirname + '/build',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			}
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};
