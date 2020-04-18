const path = require('path');
const SRC_DIR = path.join(__dirname, '/clientPerformer');
const SHARED_DIR = path.join(__dirname, '/clientShared');
const DIST_DIR = path.join(__dirname, '/public/assets');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle-performer.js',
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
        test : /\.(js|mjs|jsx)$/,
        include : [SRC_DIR, SHARED_DIR],
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        include: [SRC_DIR, SHARED_DIR],
        use: ['style-loader','css-loader'],
      }
    ]
  }
};