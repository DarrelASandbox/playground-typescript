const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.(png|jpg|gif|ico)$/,
        type: 'asset/resource',
        generator: { filename: 'src/[name][ext]' },
      },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Path to your HTML template file
      filename: 'index.html', // Output filename
      inject: 'body', // The script tag will be injected into the 'body' of the HTML file
    }),
  ],
};
