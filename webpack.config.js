const path = require('path');
const webpack = require('webpack');

function createConfig(target) {
  var name = 'index.js';

  if(target !== 'commonjs2') {
    name = 'es6-starter.js'
  }

  var output = {
    library: 'StylesJs',
    libraryTarget: target,
    path: path.resolve(__dirname, 'dist'),
    filename: name
  }

  if(typeof target === 'undefined') {
    name = 'styles.js';
    output = {
      path: path.resolve(__dirname, 'dist'),
      filename: name
    }
  }

  return {
    name: target,
    entry: ['babel-polyfill', './src'],
    output: output,
    module: {
      rules: [
        {
          test: /\.css$/,
          loader:'style-loader!css-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    target: 'node'
  }
}

module.exports = [
  createConfig('commonjs2')
]