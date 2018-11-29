const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  context: __dirname,
  plugins: [
    new CopyWebpackPlugin([
      { from: "./public/index.html", to: "index.html" },
      { from: "./public/foggyMountains.jpg", to: "foggyMountains.jpg" }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  }
}
