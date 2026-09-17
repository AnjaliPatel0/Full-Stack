// OPERATORS
// * OPERATORS are how we perform actions on variables and values
// * 6 operators -> Arithmetics,Assignment,String,Logical,Camparison,Conditonal(ternary)

// Arithmetic Operator->+,-,*,/,%,**
console.log("Arithmetic Operator")
let v1=10;
let v2=20;
console.log(v1+v2)
console.log(v1-v2)
console.log(v1*v2)
console.log(v1/v2)
console.log(10%3)
console.log(10**3)

// Assignment Operator -> =,+=,-=,*=,/=,%=,**=
console.log("Assignment Operator")
let n=10;
n+=5;
n-=5
console.log(n)

// Comparison Opeartors -> ==,===,!=,!==,<,>,>=,<=
console.log("Comparison Operator")
let q=10;
let p=20;
let m='10'
let per=59;
console.log(per>60)
console.log(q==m) //it check only value
console.log(q===m) // it also check datatypes
console.log(q!=p)
console.log(q!==m)

// Logical Operator -> ||, !, &&
console.log("Logical Operator")
let uname="ws";
let password="123"
console.log(uname=="ws" && password=="123")
console.log(uname=="ws" && password=="1234")

let x=55;
console.log(x>=48 && x<70)

let y=60;
console.log(m!="" || m>60)

let sub1=90;
let sub2=85;
let sub3=25;
console.log(sub1<35 || sub2<35 || sub3<35)

console.log(!(10==10))

// Ternary Operator -> condition ? 'true' : 'false'
console.log("Ternary Operator")
let num1=10;
let output=(num1%2==0) ? "Even Number" : "Odd Number";
console.log(output)