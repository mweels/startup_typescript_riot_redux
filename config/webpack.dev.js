var webpack = require('webpack');
var path = require('path');

var APP_DIR = __dirname + '/..';

console.log (APP_DIR);

module.exports = {
  cache:false,
  debug: true,  entry: ['./app/new/index.ts',
  'webpack-hot-middleware/client'],
  
cache: false,
  module: {
  
    loaders: [
          { test: /\.ts$/, loader: 'ts' },
        { test: /\.tag$/, exclude: /node_modules/, loaders: ['babel','riotjs-loader'] }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.js', '.ts','.tag'],
    modulesDirectories: ["web_modules", "node_modules", "bower_components","script"]

  }
};
