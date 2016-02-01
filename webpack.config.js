'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var cssnext = require('postcss-cssnext');
// var reporter = require('postcss-reporter');
var autoreset = require('postcss-autoreset');
var postImport = require('postcss-import');

var srcFolder = path.join(__dirname, 'src');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'builds'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    preLoaders: [
      {
        test: /.js$/,
        loaders: [
          'eslint',
          'jscs'
        ],
        include: srcFolder,
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss',
        ],
        include: srcFolder,
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: srcFolder,
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss: [
    cssnext(),
    // postImport(),
    autoprefixer({
      browsers: 'last 2 version',
    }),
    autoreset(),
    cssnano(),

    // reporter({
    //   clearMessages: true,
    // }),
  ],
  resolve: {
    root: srcFolder,
  },
  devtool: 'source-map',
};
