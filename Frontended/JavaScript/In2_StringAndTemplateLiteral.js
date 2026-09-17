// Strings And Template Literals
let n=10;
let w=`Welcome ${n} to ${20+10} WS`
console.log(w)


// DataTypes
// Primitive -> Number, String, Boolean, Null,undefined, symlbol,bigInt
// Non primitive -> Object
let num=20,num1='20',num2=20.5;
console.log( num ,typeof num)
console.log( num1 ,typeof num1,num2,typeof num2)

// boolean
let s=true;
console.log(s,typeof s)
console.log(s+5)

// NULL
let nu=null;
console.log(typeof nu)

// undefined
let x;
console.log(x, typeof x)

// Symbol -> it define unique value
let uid=Symbol('123')
let cid=Symbol('123')
console.log(uid==cid)

// BigInt
let bigInt=8888888888888n;
console.log(bigInt,typeof bigInt)

// Object -> Array
let users=["ravi","ram",20,10]
console.log(users,typeof users)

let obj={
    cName:"ram",
    courseName:"JS"
}
console.log(obj,typeof obj)