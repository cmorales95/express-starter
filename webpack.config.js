const path = require("path");
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./public/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./public/dist"),
  },
  module: {
    rules: [
      // reglas para importar
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.pug/,
        loader: "pug-loader"
      },
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: [
            'style-loader',
            'css-loader',
        ]
    },
    ],
  },
  plugins: [
      new MinifyPlugin(),
      new CleanWebpackPlugin(),
  ]
};
