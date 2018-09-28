"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var enums_arrows_1 = require("./enums_arrows");
// import is not a mere import of the module, TS also runs the script that is in global scope
var p = new classes_1.Person("Kill", "Min", 12345);
console.log(p);
console.log(enums_arrows_1.STATES.TX);
// 
