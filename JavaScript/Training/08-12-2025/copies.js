console.log('Copies of Objects:')
// 1.Normal Copy:
// 2.Deep Copy:
//3.shallow Copy:
console.log('1.Normal Copy:')
var original={a:100,b:200,c:{name:"Prashanth",sec:"D"}}
console.log(original)
original.a=20
original.b=10
original.c.name='Madhu'
console.log(original)

console.log('2.Deep copy:')
const obj1={a:10,b:{x:20}}
const deepcopy=JSON.parse(JSON.stringify(obj1))
// console.log(deepcopy)
deepcopy.b.x=200
console.log(deepcopy)
console.log(obj1)
obj1.a=100
console.log(obj1)
console.log(deepcopy)

// 3.Shallow copy
var a1={a1:100,a2:200,a3:300,a4:{name:"Prashanth"}}
// a1.forEach(i,j,k => 
//     console.log(i,j,k)
// );
// a1.forEach({

// })
var shallow={...a1}
console.log(shallow)
shallow.a4.age=25

console.log(shallow)
a1.a2=1
console.log(a1)
console.log(shallow)
// a1.forEach(values , index , i => {
//     console.log(values,index,i)
// });
// var apple=[1.2,3,4,5,5]
// apple.forEach((i,j,k)=>{
// console.log(i,j,k)
// })
Object.values(a1).forEach((g) => {
    console.log(g)
});
var d={...a1}
console.log(d)
a1.a1=200
console.log(a1)
console.log("Copy:",d)
d.a3=4
console.log(d)
a1.a1="Madhu"
console.log(a1)


var fruits={Apple:5,Bananna:4,PineApple:3,Grapes:2,Guava:6}
Object.keys(fruits).forEach((n)=>{
console.log(n, fruits[n])
})
for(  x in fruits){
    console.log(fruits[x])
}
let array2=["madhu",2,3,4,5,6]
for(  c of array2){
console.log(array2[c])
}
console.log(fruits.Apple)
console.log(fruits)

// object entities
let object={name:'Prashanth',sec:'m'}
 delete object.name
 console.log(object)
 console.log(object.sec)
  console.log(object['sec'])
  object.sec="F"
  console.log(object)
 console.log(Math.floor(Math.random()*(200-100+1))+100)
let m1=1
let m2=10
console.log(`m1 value is ${m1} m2 value is ${m2} and the sum is m1 and m2 is ${m1+m2}`)