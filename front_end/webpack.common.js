const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Pastikan entri sudah benar
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Menggunakan style-loader dan css-loader
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.html',  // Pastikan path ke template sudah benar
      favicon: './favicon.ico',  // Path ke favicon Anda
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'favicon.ico', to: 'favicon.ico' }, // Menyalin favicon ke folder dist
      ],
    }),
  ],
};
