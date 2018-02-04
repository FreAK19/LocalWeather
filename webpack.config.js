const path = require('path');
const webpack = require('webpack');

const PATH = {
  app: path.join(__dirname, 'src/index.jsx'),
  build: path.resolve(__dirname, 'build')
};

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],

  output: {
    path: PATH.build,
    filename: 'app.bundle.js',
    publicPath: "/public/"
  },

  devtool: "inline-source-map",
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    open: false,
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },
  stats: {
    chunks: true,
    reasons: true,
    colors: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};