var arrOne : number[]
arrOne = [1,2,3]
arrOne.push(4)
//arrOne.push(true) //compilation error
console.log(arrOne);
var arrTwo: string[]
arrTwo = ['one', 'two', 'three']
console.log(arrTwo);
// tuple - forces to create an array of same size
// allows to push though

var myArr: [number, string]
myArr = [1,'Jim']
myArr.push(2)
//myArr.push('jidm')
myArr.push('true')

console.log(myArr);