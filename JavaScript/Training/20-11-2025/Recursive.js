console.log("recursive Function:")

function factorial(n) {
    if (n === 0) { 
        return 1
    }
    return n * factorial(n - 1) // Recursive call
}

console.log(factorial(6))




function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return  fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))

// function sumofarrays(f){
//     let sum=1
//     if(f<=1){
//         return f
//     }
//     for(let i=0;i<f.length;i++){
//       sum+=f[i]
//     }
//     return sum
// }
// console.log(sumofarrays[1,2,3,4])



function sum(a){
let sum=0
if(a<=1){
    return a
}
for(let i=0;i<a.length;i++){
sum+=a[i]

}
return sum
}
console.log(sum([1,2,3,4]))
console.log(sum([10,20,30,40,50]))

console.log(`scope variables in javascript.`)
// 1.Global Scope:
// 2.Function Scope:
// 3.Block Scope:
// 4.Lexical Scope:


// Scope:if variable declared to access that variable in your code
console.log(`1.Global Scope:`)
// Global Scope:"if variable declared outside & function we can access any time in that code once we declared the variable"
var a=20
let a1=20
const a2=10
let a3=()=>{
    console.log(a1)
    console.log(a)
    console.log(a2)
}
a3()


console.log(`2.Function Scope:`)
let fu=function a(){
    let a=10
   var b=10
console.log(a,b)}
fu()
// console.log(b)


console.log('3.Block function:')
{
    // var a=10
    const m1=10
    let _=10
}
// console.log(_)
// console.log(m1)


console.log('4.Lexical Scope')
function multi(){
    let a=10
    // console.log(a)
    function a4(){
        console.log(a)
    }
    a4()
}
(multi())
var array1=[10,40,30,60,80]
let p=0
for(let i=0;i<array1.length;i++){
    if(array1[i]>p){
        p=array1[i]
    }
}
console.log(p)
// (function() {
//     console.log('a')
//     ()
// })