const path = require('path');
const webpack = require('webpack');

module.exports = {
  watch: true,
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
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          //silent: true,
          //useTranspileModule: true,
          useBabel: true,
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
