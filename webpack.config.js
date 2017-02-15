const buildPath = __dirname + "/bin"

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: "style!css!less-loader"}
    ]
  }
};