const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Direktori build
    },
    compress: true,
    port: 9001,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000', // Arahkan permintaan API ke backend
    },
  },
  devtool: 'inline-source-map',
});
