const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  /*plugins: [
    new UglifyJSPlugin(),
  ],*/
  devtool: 'source-map',
  context: __dirname,
  entry: {
    'index': './src/index.ts',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    pathinfo: true,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          useTranspileModule: true,
          //useBabel: true,
          //useCache: true,
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.ts', '.js'],
  },
  stats: {
    modulesSort: 'size',
    maxModules: 100,
  },
};
