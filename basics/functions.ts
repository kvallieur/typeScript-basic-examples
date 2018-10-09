// type functions


function addWithoutType(x: any, y: any) {
    return x + y
}

var sumWithoutType = addWithoutType('x', 1)
console.log(`the sum of elements without type specified is ${sumWithoutType}`)

function add(x: number, y: number) {
    return x + y
}

let sum = add(1, 2)
console.log(`sum is ${sum}`)

// typescript allows optional params - 
// however the optional params should be towards the ending only

function addOptional(a: number, b: number, c:number = 0, d:number = 0):number {
    return a + b + c + d ;
}

console.log(`sum with no optional elements ${addOptional(1, 2)}`)

console.log(`sum with one  optional element ${addOptional(1, 2, 3)}`)

console.log(`sum with two  optional elements ${addOptional(1, 2, 3, 4)}`)