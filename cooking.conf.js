var path = require('path');
var cooking = require('cooking');
cooking.set({
  entry: {
    app: ['babel-polyfill', './src/main.js'],
    vendor:['vue']
  },
  dist: './Root',
  template: './index.tpl',

  devServer: {
    hostname: '10.0.1.88',
    port: 8080,
    publicPath: '/',
    historyApiFallback: true,
  },
  extractCSS:true,
  // production
  clean: true,
  hash: true,
  sourceMap: false,
  minimize: true,
  chunk: [
  	'vendor',
  	'manifest'
  ],
  postcss: [
    require('postcss-salad')
  ],
  format:'var',
  publicPath: './',
  assetsPath: 'static',
  static:['static', 'docs'],
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2']
});

module.exports = cooking.resolve();
