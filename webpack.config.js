/*
 * Webpack Config
 */

var webpack = require('webpack');

module.exports = {

  // Entry
  entry : [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],

  externals : {
    jquery : 'jQuery'
  },

  plugins : [
    new webpack.ProvidePlugin({
      '$'       : 'jquery',
      'jQuery'  : 'jquery'
    })
  ],

  //Output
  output : {
    path : __dirname,
    filename : './public/bundle.js'
  },

  //Code Transformations
  resolve : {
    root : __dirname,
    alias : {
      Main          : 'app/components/Main.jsx',
      Nav           : 'app/components/Nav.jsx',
      Timer         : 'app/components/Timer.jsx',
      Container     : 'app/components/Container.jsx',
      Countdown     : 'app/components/Countdown.jsx',
      Clock         : 'app/components/Clock.jsx',
      CountdownForm : 'app/components/CountdownForm.jsx',
      Buttons       : 'app/components/Buttons.jsx'
    },
    extensions  : ['','.js','.jsx']
  },

  //module: loader
  module  : {
    loaders : [
      {
        loader  : 'babel-loader',
        query : {
          presets : ['react','es2015','stage-0']
        },
        test    : /\.jsx?$/,
        exclude : /(node_modules|bower_components)/
      }
    ]
  },
  devtool : 'cheap-module-eval-source-map'
};
