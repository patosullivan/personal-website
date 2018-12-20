const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ImageminPlugin = require("imagemin-webpack-plugin").default
const imageminMozjpeg = require("imagemin-mozjpeg")
const ManifestPlugin = require("webpack-manifest-plugin")
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")

module.exports = {
  context: __dirname,
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: "patrick",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      navigateFallback: "./index.html",
      staticFileGlobsIgnorePatterns: [
        /_redirects/,
        /_headers/,
        /asset-manifest\.json$/
      ]
    }),
    new ManifestPlugin({ fileName: "asset-manifest.json" }),
    new CopyWebpackPlugin([{ from: "./public/", to: "./" }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 85,
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
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "responsive-loader",
          options: {
            sizes: [268, 290, 323, 345, 373, 395, 528, 1140],
            placeholder: true,
            placeholderSize: 50,
            name: "imgs/[name]-[width].[ext]"
          }
        }
      }
    ]
  },
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  }
}
