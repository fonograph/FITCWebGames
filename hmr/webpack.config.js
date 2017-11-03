var path = require('path');
var webpack = require('webpack');

// Phaser webpack config
var phaserModule = path.join(__dirname, 'node_modules/phaser-ce/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins =  [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js'}),
    new HtmlWebpackPlugin({chunksSortMode: 'auto'}),
    new webpack.HotModuleReplacementPlugin({}),
];

module.exports = {
  target: "web",
  devtool: 'eval-source-map',
  entry: {
      vendor: ['pixi', 'p2', 'phaser'],
      main: path.resolve(__dirname, 'src/main.js')
  },
  devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      port: 8080,
      host: '0.0.0.0',
      disableHostCheck: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '[resource-path]'
  },
  node: {
   fs: 'empty',
   net: 'empty',
   tls: 'empty'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'phaser': phaser,
      'phaser-ce': phaser,
      'pixi': pixi,
      'p2': p2,
      assets: path.join(__dirname, 'assets'),
    }
  },
  plugins: plugins,
  module: {
    rules: [
      { test: /pixi.js/, use: [{loader: 'expose-loader', options: 'PIXI'}] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
      { test: /\.mp3$|\.ogg$/, use: 'file-loader?hash=sha512&digest=hex&name=[name]-[hash].[ext]' },
      { test: /.*\.(gif|png|svg|jpe?g)$/i, use: 'file-loader?hash=sha512&digest=hex&name=[name]-[hash].[ext]' }
    ]
  },
};
