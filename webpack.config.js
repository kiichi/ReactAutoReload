var path = require('path');
module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'src/App.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	module: {
              loaders: [{
                test: /\.jsx?$/,
                loader: 'babel'
	}] }
};
