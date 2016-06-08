const base = require('./webpack.config.base.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = base.merge({
  devtool: 'eval',
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ]
});