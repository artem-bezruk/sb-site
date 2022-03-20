const path = require('path');
module.exports = {
  entry: './cms.js',
  output: {
    filename: 'cms.bundle.js',
    path: path.resolve(__dirname, '../static/admin/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "babel-preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      "site": "../src/"
    }
  }
};
