"use strict"

let _ = require("underscore");

let names = [1,2,3,4];

let add2 = _.map(names, name=>name+2);

let min = _.max(add2);

console.log(min);