const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  target: "web",
  entry: "./src/index.js",
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
    extensions: [".ts", ".js", ".jpg", "jpeg", "png"],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
