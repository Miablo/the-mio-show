// src/utils/jss.js
const preset = require('jss-preset-default').default;

module.exports = function(jss) {
  return jss.setup(preset());
}