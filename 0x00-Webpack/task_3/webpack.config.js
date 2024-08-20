const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({filename: 'index.html'}),
  ],
  devtool: 'inline-source-map',
  entry: {
    header: path.resolve('./modules/header/header.js'),
    body: path.resolve('./modules/body/body.js'),
    footer: path.resolve('./modules/footer/footer.js')
    /* main: path.resolve(__dirname, './js/dashboard_main.js') */
  },
  output: {
    filename: '[name].bundle.js',
    filename: '[name].bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
	},
  devServer: {
    static: path.resolve(__dirname, 'public'),
    open: true,
    port: 8564
  },
  
  performance: {
    maxAssetSize: 1000000
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
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
      }
    ]
  }
}