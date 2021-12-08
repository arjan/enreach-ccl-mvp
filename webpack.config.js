const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "www"),
    },
    compress: true,
    port: 9000,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
