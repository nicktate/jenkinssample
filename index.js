'use strict';

const _ = require('lodash');
const path = require('path');

console.log('this is my sample application');
console.log(path.resolve('/whatever'));

console.log(_.map([1,2,3], (v) => `value: ${v}`));
