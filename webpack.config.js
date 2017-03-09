const webpack = require('webpack');

const common = {
  entry: {
    infinite: './src/Infinite.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loaders: ['babel-loader'], 
        include: __dirname + '/src'
      },
      { 
        test: /\.svg$/,
        loader: 'url-loader?limit=10000',
        include: __dirname + '/src'
      }
    ]
  },
  externals: {
    react: 'React'
  }
};

const library = {
  output: {
    path: __dirname + '/lib/',
    filename: '[name].js',
    library: 'Infinite',
    libraryTarget: 'umd'
  }
}

// Build for script tag
const script = {
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    library: 'Infinite',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

let config;

if (process.env.TYPE === 'script'){
  config = Object.assign(common, script);
}else{
  config = Object.assign(common, library);
}

module.exports = config;
