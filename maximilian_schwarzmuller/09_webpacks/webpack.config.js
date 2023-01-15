const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') },
  devtool: 'source-map',
  // ts.loader package
  // Regex to check for .ts extension
  module: { rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }] },
  resolve: { extensions: ['.ts', '.js'] },
};
