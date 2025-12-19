function name(){
     return new Promise((resolve,reject)=>{
   setTimeout(() => {
    resolve("success")
   }, 1000);
    })
}
async function hai(){
     return await name()
}
let p=hai()
console.log(p)



// Iterators
// Generators


let Array=[1,2,3,4,4,5,6]
let k=Array[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

// Generators

function* data(){
    yield "Hello"
    yield "Welcome"
    yield "Bank"
}
let c=data()
console.log(c.next())
console.log(c.next())
console.log(c.next())
console.log(c.next())
console.log(c.next())



// Array Destructinhg:

let Names=["Prshanth",25,"Dharmavarm",175.6]

let[A,B,C,D,E,F]=Names
console.log(A,B,C,D)


// Nested Array Destructing:
let Hospital=['Apollo',"RIMS",["KIMS","GOVT","PRI"],["Rainbow","Joseph"]]
let [M1,M2,[M3,M4,M5],[M6,M7,M8]]=Hospital
console.log(M1,M2,M3,M4,M5,M6,M7)





// Object Destrcting:
// let obj={name:"Prashnath",age:25,sec:"D",clg:"RGM",location:'DMM',age1:{Var:24}}
// let{name,age1:{Var}}=obj
// console.log(name,Var)

// Object Destructing:
const employee={empId:101,details:{empName:"Madhu",Department:'IT'}}
const{empId,details:{empName,Department}}=employee
console.log(empId)
console.log(empName)
console.log(Department)

let object={Name:"Prashnath",sec:"D"}
let{Name,sec}=object
console.log(Name)
console.log(sec)