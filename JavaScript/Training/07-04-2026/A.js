console.log("Function methods:")
// call ,apply,bind
var obj1={name:'Prashanth',sec:'B',city:"Dharmavarm"}

function obj(){
console.log(this)
}
obj.call(obj1,obj)
// obj()
obj.apply(obj1,[obj])
obj.bind(obj1,obj)()

console.log('Array Methods:')

// push ,unshift,pop,shift,indexof,includes,slice,splice
var a=()=>{
let Array=['Prashanth',25,"Dharmavarm",7993663745,"AndhraPradesh",{name:"Madhu",Location:"Dharmavarm"}]


Array.push('Madhu')
console.log(Array)

Array.unshift("Sai")
console.log(Array)

Array.pop()
console.log(Array)
Array.shift()
console.log(Array)

Array.splice(0,1)
console.log(Array)
console.log(Array.indexOf("Dharmavarm"))

console.log(Array.includes(25))}
a()
function data(){
    let array1=[1,'prashanth','madhu',456]
    for( x of array1){
        console.log(x)
    }
}
data()

