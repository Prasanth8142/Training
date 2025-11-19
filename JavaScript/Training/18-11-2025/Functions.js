// Function Expressions:
// Named function Expression
// Anonymous function
// Arrow Function experrsion
var Hospital=function a(Nameoftheperson,years){
    var LIC=300000
    console.log(Nameoftheperson+ " "+LIC*years)
}
Hospital('prashanth',2)


var Infotech=function(){
    var salary={Prashanth:10000,madhu:1000,}
    console.log(salary.Prashanth*2)
}
Infotech()
// Anonymous function

var array=function(a){
 var largestarray=[0]
 for(let i=0;i<a.length;i++){
    if(a[i]>largestarray){
     largestarray=a[i]
    }
    
 }
  return largestarray

}
console.log(array([1,2,3,4,20,34,65,78]))
 

// Reverse a string
var reverse=function(str){
     return str.split("").reverse().join("")
}
console.log(reverse("Madhu"))

// Arrow Function
var Palindrome=(str)=>{
const result=str.split('').reverse().join("")
return str==result
}
console.log(Palindrome("1234"))

    var elimate=(a)=>{
     return a.slice(2)
     
    }
console.log(elimate([4,5,6,7]))
function add(a='String' ,b=10){
console.log(a,b)
// console.log(f)
}
add(10,1.4)
// add a property on object:
var a={name:"Prashanth"}
a.age=25
console.log(a)

// delete property on object
delete a.name
console.log(a)

// sum of the arrays
function addarrays(array){
var sum=0
for(let i=0;i<array.length;i++){
    sum+=array[i]
}
return sum
}
console.log(addarrays([15,20,45]))

// prime number
function isprime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++)
        {
        if(num%i===0){
            return false
        }
    }
    return true
}
console.log(isprime(2))

// Factorial of numbers
function Factorial(num){
var answer=1
for(let i=2;i<=num;i++){
answer*=i
}
return answer
}
console.log(Factorial(7))


console.log('redeclaration are allows in let keyword only')
// redeclaration:
var m=10
var m=20
var m=10
console.log(m)


// let m1=10
// let m1=20
//  const m2=10
//  const m2=10
console.log('reassignment:let,var only')
var n=10
n=20
console.log(n)
let n1=10
n1=40
console.log(n1)
// const n2=10
// n2=30
// console.log(n3)

// Intialization
let add3
var add1
console.log(add3)
console.log(add1)
// const 2

console.log('Hositing:')
console.log(x)
var x=2
console.log(x)

let a4={name:'Prashanth',id:1234}
console.log(a4)