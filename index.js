let lodash = require("lodash");

let moment = require("moment");

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

console.log(moment().format("dddd"));

console.log(moment().format("MMMM Do YY"));

console.log(moment("2014-11-11").format("YYYY-D-M"));

console.log(moment().add(7, "days").format("MMMM Do"));
console.log(moment().add(7, "months").format("MMMM Do"));
console.log(moment().add(7, "year").format("MMMM Do YYYY"));
console.log(moment().subtract(7, "days").format("MMMM Do"));
console.log(moment().subtract(7, "months").format("MMMM Do YYYY"));
console.log(moment().subtract(7, "year").format("MMMM Do YYYY"));

let a = moment("2014-11-11").format("YYYY-DD-MM");
let b = moment("2015-09-11").format("YYYY-DD-MM");

console.log(moment().diff(a, b));
