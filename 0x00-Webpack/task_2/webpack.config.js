const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
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