const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'), // Folder build utama
      },
      {
        directory: path.join(__dirname, 'assets'), // Folder assets
      },
    ],
    compress: true,
    port: 9001,
    open: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000', // Arahkan permintaan API ke backend
    },
  },
  devtool: 'inline-source-map',
});
