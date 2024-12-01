const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Direktori yang akan dilayani oleh dev server
    },
    compress: true,
    port: 9001,
    open: true
  },
  devtool: 'inline-source-map'
});
