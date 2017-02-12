"use strict";
var lodash_1 = require("lodash");
var moment = require("moment");
function component() {
    var element = document.createElement('div');
    var x = lodash_1["default"].join(['Hello', 'webpack xyz'], ' ');
    var z = function (zz) { return moment('2110-12-12').format() + zz; };
    element.innerHTML = z(x);
    return element;
}
document.body.appendChild(component());
