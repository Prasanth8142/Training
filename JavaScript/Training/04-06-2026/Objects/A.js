// 4 ways to  define objects

var a={}
console.log(a)
const b=new Object()
console.log(b)

// constructor


function Person(first,second){
    this.firstname=first
    this.secondname=second
    this.Fullname= function(){
     return first + " "+ second
    }
}
const person1=new Person("Kodekandla","Prashanth")
const person2=new Person("Sake","Madhu")
// console.log(person1)
console.log(person1.Fullname())
console.log(person2)

// ES-6 Class Constructor
class student{
    constructor(name,age){
        this.name=name,this.age=age
    }
}
const d1=new student('Prashanth',25)
console.log(d1)


function data(){
class Hospital{
   constructor(){
    this.heartdoctor="Madhu",
    this.skindoctor="Sai"
   }

   medical(){
 return "Doctorname:" +this.heartdoctor 
   }
}
const h1=new Hospital()
console.log(h1)
console.log(h1.medical('dolo'))}
data()



// copy constructor
// console.log(this)
function Employee(emp){
    // console.log(this)
this.name=emp.name
this.age=emp.age
}
const e1={name:"prashanth",age:25}
const e2=new Employee(e1)
console.log(e2)



// default constructor
function yes(){
    this.firstname="Madhu",
    this.secondname='sake'
    return this.firstname + this.secondname
}
console.log(yes())

function apple(){
    this.name="Vamsi",
    this.age=25.
    return this.name + this.age
}
var d2=new apple()
console.log(d2)
// Paramter constructor
function items(sugar,ice){
this.sugar=sugar,
this.ice=ice
console.log(this.sugar + this.ice)
}
var d4=new items(200,100)
console.log(d4)








