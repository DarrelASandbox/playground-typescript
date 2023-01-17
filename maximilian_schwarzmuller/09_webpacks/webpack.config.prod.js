const CleanPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: false,
  // ts.loader package
  // Regex to check for .ts extension
  module: { rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }] },
  resolve: { extensions: ['.ts', '.js'] },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!index.html', '!app.css'],
    }),
  ],
};