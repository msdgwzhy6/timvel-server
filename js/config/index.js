require('babel-register')({
  presets: [ 'es2015', 'stage-2', 'react'],
  // plugins: ['transform-decorators-legacy']
});
require('babel-polyfill');

require('./express');