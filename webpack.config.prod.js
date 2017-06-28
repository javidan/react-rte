var path = require('path');


module.exports = {
  entry: './src/RichTextEditor.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-rte.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {loaders: loaders},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      comments: true,
      mangle: false,
      compress: {
        dead_code: true,
      },
    }),
  ],
}