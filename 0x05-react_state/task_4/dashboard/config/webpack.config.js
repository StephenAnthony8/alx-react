  /* 
  format
  entry:
  output:
  module:
  devtools:
  devServer:
  plugins:

  etc..the rest you can get from webpack api documentation


   */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  
  entry: {
    main: path.resolve('./src/index.js'),
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  
  module: {
    rules: [
      /* css */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      /* images */
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      },
      /* babel */
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: "development",

  devServer: {
    hot: true,
    static: path.resolve(__dirname, 'dist'),
    open: true
  },

  performance: {
    maxAssetSize: 1000000
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      filename: "./index.html"
    })
  ],

  

}