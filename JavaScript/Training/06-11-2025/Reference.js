


var b= new Date()
console.log(b)




// console.log('Set:')
//  var b1=new Set(null)
// console.log(b1)







console.log('regexp')
// var m1=/[a-z]/g
// console.log(m1)



console.log('Functions:')
function salary(name,workingdays){
    var perday=500
    console.log('Name of the person:'+ name +':' + perday*workingdays)
    }
salary('madhu',40)
salary('sai',1)
salary('Prashanth',50)

var map=new Map()
map.set("Name:","son")
map.set("Age:",25)
console.log(map.get("Name:"))


function add(a,b){
console.log(a+b)
}
add(500,600)

console.log('Weakset')
let weakset= new WeakSet()
let user1={name: "Prashanth"}
let user2={name:"Don"}
weakset.add(user1)
weakset.add(user2)
weakset.delete(user2)
console.log(weakset.has(user1))
console.log(weakset.has(user2))




console.log('Weakmap')
let map1=new WeakMap()
let obj1={id:3}
let obj2={id:2}
map1.set(obj1,"Prashanth")
map1.set(obj2,6)
console.log(map1.get(obj1))
console.log(map1.get(obj2))
