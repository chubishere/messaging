var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './src/app/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'src/dist')
  },
	module: {
		rules: [
			{ test: /\.ts$/ , use: 'ts-loader'}
		]
	},
	resolve: {
		extensions: ['.js', '.json', '.ts']
	},
  devtool: "inline-source-map",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
};
