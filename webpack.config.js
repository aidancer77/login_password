const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/javascript.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html', // Исходный HTML-файл
      filename: 'index.html', // Куда сохранить в dist
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname), 
    hot: true, 
    liveReload: true,
    port: 3001, 
    open: true, 
  },
};