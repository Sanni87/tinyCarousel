const path = require('path');

module.exports = {
  //mode: 'development',
  entry: {
    min: './src/tinyCarousel.plugin.js',
    module: './src/tinyCarousel.module.js',
  },
  //devtool: 'inline-source-map',
  output: {
    filename: 'tinyCarousel.[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};