// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point: your main JavaScript file
  output: {
    filename: 'bundle.js', // The output file after bundling
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  mode: 'development', // You can switch to 'production' for optimized builds
};
        