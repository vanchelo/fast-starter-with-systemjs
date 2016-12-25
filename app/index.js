var _ = require('lodash');
var utils = require('./utils');

require('normalize.css/normalize.css');
require('../styles.css');

var root = document.querySelector('#root');

console.log(utils.hello());

root.innerHTML = '<pre>{\n\
  message: \'Hello from "app/index.js"\'\n\
};</pre>';
