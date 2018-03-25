module.exports = {
  entry: ['./public/index.js'],
  output: {
    filename: 'index.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
    ]
  }
}
