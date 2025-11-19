console.log('Scope variable concepts:')
// scope:where a variable is accessible in yor code
// There are 3 Types od scope Variables in javaScript.
// 1.Global Scope
// 2.Function Scope
// 3.Block scope
//4.Lexical Scope
// 1.Global Scope:a variable declared outside of function or block can be used in any where
console.log('1.Global Scope:')
var city='Dharmavarm'
function printcity(){
console.log(city)
}
printcity()
console.log(city)
// Global scope applies on the objects
var obj={name:'prashanth',age:25,city:'Dharmavarm',sec:['B',814,213]}
var g=()=>console.log(obj)
g()
g(obj['sec'])
function print(){
    console.log(obj.name)
    console.log(obj.sec)
}
print()
console.log('2.Function Scope:')
// 2.Function Scope:variables are declared inside a function are availble only inside a function
function name(){
    let School={chaiatanya:"DMM",Narayana:"TPTY",Yashoda:"ATP",Bhashyam:"PTP"}
    const data=[`mango`,`Apples`,`Chai`,`pineapple`,`strawberry`]
    console.log(School)
    console.log(data)
}
name()
// console.log(School)
// console.log(data)
console.log('3.block scope:')
// 3.Blockscope:variables declared using let,const inside a block ara availble only inside that block
{
let a=10
const b=20
}
// // console.log(a)
// console.log(b)
// {var a=10}console.log(a)
console.log('4.inner function can access variables from their parent functions.')
function outer(){
    let name="prashanth"
    // console.log(name)
function inner(){
    console.log(name)
}
inner()
}
outer()


// Variable Behaviours in JavaScript.
console.log('Redeclaration')
var a=[1,2,3,4,5,'Prashanth']
var a=[1,2,3,4,'Psay']
console.log(a)
// let a1={name:'Prashnath'}
// let a1={name:'sai'}
// const a1=function a(){
//     let a=10
//     let b=10
//     console.log(a)
// }
// a1()
// const a1=
console.log('Reassignment')
var a1={Data:1234,System:'ICU'}
var a1={name:'sai',Sec:'D'}
console.log(a1)
let a2=function(){
    var a=10
    console.log(a)
}
a2()
a2=function(){
    console.log('data')
}
a2()

// const d={name:'sai',sec:'d'}
// d={name:'sai'}
// console.log(d)

console.log('Intilization')
var a4
console.log(a4)
let a3
console.log(a3)
// const a6
