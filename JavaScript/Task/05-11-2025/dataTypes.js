console.log('bigInt Data Type:')
let a=33n
console.log(a)
console.log(typeof a)
let b=a
console.log(b)


console.log(`Symbol DataType:it is a immutable and unique`)
var m=Symbol("Apple is a fruit ")
console.log(m)


var m2=Symbol('AutoMobile:')
var m3=Symbol('AutoMobile:')
console.log(m2==m3)
console.log(typeof m2)
console.log(typeof m3)
   

console.log('keywords:this')
const car={
    brand:'Toyota',
    colour:'black',
    start:function(){
        console.log("starting :" +this.colour )
    }
}
car.start()
console.log(typeof car)
console.log('delete keyword:')
const student={
    name:"Prashanth",age:25,city:"Dharmavarm",Phno:7993663745
}
delete student.Phno
console.log(student)
console.log(typeof student)
console.log(student.name)
console.log(student.age)
console.log(student.Phno)
const d=123
console.log('d')
console.log(student.city)

console.log(typeof d)