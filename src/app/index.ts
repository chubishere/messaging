import _ = require('lodash');
import moment = require('moment');
import foo = require('./foo');

foo();

function component () {
  var element = document.createElement('div');

  var x = _.join(['Hello','webpack xyz'], ' ');
  var z = zz => moment('2110-12-12').format() + zz;
  element.innerHTML = z(x);

  return element;
}

document.body.appendChild(component());
