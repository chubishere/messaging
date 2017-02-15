var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './src/main.ts',
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
		new webpack.ContextReplacementPlugin(
				/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
				path.resolve(__dirname, 'doesnotexist/')
		)
  ],
  devtool: "inline-source-map",
  devServer: {
		contentBase: "./src/"
	}
};
