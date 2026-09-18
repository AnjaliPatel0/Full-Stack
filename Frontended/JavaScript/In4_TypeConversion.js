// Type Conversion 
// * Implicit -> Automatic type conversion
//  Explicit -> manual type conversion

// Implicit
console.log('5'-'2')
console.log("10"*"5")
console.log(true + 5)
console.log("10"+5) //concate  

// Explicit
let n='105.5';
console.log(n,typeof n)

let n1=parseInt(n)
console.log(n1, typeof n1)

let f1=parseFloat(n)
console.log(f1,typeof f1)

let n2=Number(n)
console.log(n2,typeof n2)