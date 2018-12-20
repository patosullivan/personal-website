const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ImageminPlugin = require("imagemin-webpack-plugin").default
const imageminMozjpeg = require("imagemin-mozjpeg")
const ManifestPlugin = require("webpack-manifest-plugin")
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")

module.exports = {
  context: __dirname,
  plugins: [
    new SWPrecacheWebpackPlugin(),
    new ManifestPlugin({ fileName: "asset-manifest.json" }),
    new CopyWebpackPlugin([{ from: "./public/", to: "./" }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 25,
          progessive: true
        })
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("precss"), require("autoprefixer")]
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
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
