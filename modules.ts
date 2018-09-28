import { Person } from "./classes";
import { STATES } from "./enums_arrows"

// import is not a mere import of the module, TS also runs the script that is in global scope
let p = new Person("Kill", "Min", 12345)
console.log(p);
console.log(STATES.TX);
// 