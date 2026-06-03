console.log(`Reference Data Type:`)
console.log(`multiple values in single memory`)
console.log(`I.Object=key :pair`)
var obj={name:`Prashanth`,age:25,section:'B',city:'AndhraPrdesh'}
    
console.log(obj)
console.log(typeof obj)
console.log(obj.name)
console.log(obj.age)
var att={
    college:'RGM College',Course:'ECE',Attendence:{march:25,april:45}
}
console.log(att)
console.log(typeof att)


console.log('Arrays:to stored Homogenous data or hetrogenous data')
var array=[1,2,3,'prashanth','sai',456]
console.log(array)

function add(){
    var a=10
    var b=20
    console.log(a+b)
}





var arr2=['shilpa',24,"DSC",'Ananatapur']
console.log(arr2)

console.log(typeof arr2)




function salary(name,workingdays){
    let perday=2000
    console.log('Employment name:'+name + perday*workingdays)
}
salary('prashanth',10)
salary('madhu',1)
