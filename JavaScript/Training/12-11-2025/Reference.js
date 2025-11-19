// Reference Data Types:Multiple values in single memory
// 1.Arrays
// 2.object
// 3.Functions


console.log('Arrays:')
// 1.Arrays:Collection of Homogenous data or hetro genous data 
// by using [] brackets
var array=[4,5,6,"vamsi"]
console.log(array)
console.log(array.length)
console.log(array[3])
var array2=[8,1,4,2,3.5,7,8,]
console.log(array2)
console.log(array2[6])

console.log("Objects:")
// 2.Objects:Multiple Values in single memory
var obj={
    firstname:"Named",age:45,section:"h",class:12
}
console.log(obj)
console.log(obj.firstname)
console.log([obj.age])


// 3.Function:It is a block of code .to do some task and return some value:
// 1.Function Decleration syntax
// 2.Function expression
// 1.function Decleration:
console.log("Functions:")
// var b=function (){
// var a=100
// var b=200
// console.log(a+b)
// }
// b()

// 2.Function expression:
// 1.Named Function expression:
// 2.Annonomous function expression
// 3.Arrow function expression;

console.log('Named function expression')
var student=function type(){
   let details=['madhu',17122002,'sake']
   console.log(details)
}
student()
console.log("Annonomous function expression")
let data=function (){
var perday=500
console.log("name:" + perday*30)
}
data()

console.log('arrow function')
var h=()=>{
   var data= {name:'sai',phn:1234,country:"India"}
   console.log(data)
   console.log(data.name)
}
h()
