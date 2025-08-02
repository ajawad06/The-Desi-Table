// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
devtool: "eval-source-map",
  devServer: {
  static: "./dist",
  port: 3000, 
  open: true,
},


  plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    favicon: "./src/favicon.ico", 
  }),
],

  module: {
    rules: [
{
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
