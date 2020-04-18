const path = require('path');
const SRC_DIR = path.join(__dirname, '/clientGig');
const SHARED_DIR = path.join(__dirname, '/clientShared');
const DIST_DIR = path.join(__dirname, '/public/assets');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle-gig.js',
  path: DIST_DIR
  },
  module : {
    rules : [
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test : /\.js?/,
        include : [SRC_DIR, SHARED_DIR],
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        include: [SRC_DIR, SHARED_DIR],
        loader: 'css-loader'
      }
    ]
  }
};