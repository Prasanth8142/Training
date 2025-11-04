// Reference Data Types:Multiple values in single memory
// 1.Arrays
// 2.object
// 3.Functions
// 4.Ecma Script-6 this is an organization

console.log('Arrays:')
// 1.Arrays:Collection of Homogenous data or hetro genous data 
// by using [] brackets
var array=[1,2,3,'Prashanth']
console.log(array)
console.log(array.length)
console.log(array[3])
var array2=[1,2,3,4,5,6.6,'madhu']
console.log(array2)
console.log(array2[6])

console.log("Objects:")
// 2.Objects:Multiple Values in single memory
var obj={
    firstname:"sai",age:25,section:"d",class:10
}
console.log(obj)
console.log(obj.firstname)
console.log([obj.age])


// 3.Function:It is a block of code .to do some task and return some value:
// 1.Function Decleration syntax
// 2.Function expression
// 1.function Decleration:
console.log("Functions:")
var b=function (){
var a=10
var b=20
console.log(a+b)
}
b()

// 2.Function expression:
// 1.Named Function expression:
// 2.Annonomous function expression
// 3.Arrow function expression;

console.log('Named function expression')
var student=function type(){
   let f=2
   let g=5
   console.log(f+g)
}
student()
console.log("Annonomous function expression")
let data=function (){
 var d="Don"
 var last="Man"
 console.log(d+last)
}
data()

console.log('arrow function')
var h=()=>{
    console.log('apple')
}
h()