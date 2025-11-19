console.log('Ternary Operator:')
var data=()=>{
     let array=[1,2,3,4,5,6,7,8,9,10]
array[2]==array[1] && array[4]==array[5]? console.log(true):console.log(false)
}
data()
// Ternary operator used on the objects:
var voter=(age)=>{
 let person={name:'Prashanth',Status:age>=18?"Adult":"Minor"}
console.log(person)
}
voter(10)
voter(14)
voter(18)
voter(23)

var climate=(temp)=>{
let weather={Status:temp>20?"cool":'Hot',details:temp>=30?"winter":"Summer"}
console.log(weather)
}
climate(10)
climate(30)

// Ternary operator used on the Arrays:
let marks=35
let result=["student Result:",marks>=35?"Pass" :"Fail"]
console.log(result)


function company(perday,workingDays,name){
let amount=perday*workingDays
let final=[amount>=5000?"Apply for credit card":"Not apply"]
console.log(final)
}
company(500,10,"sai")
company(500,5,"Dhamu")

console.log('for loop:')
console.log('Triangle:')
for(let i=1;i<=5;i++){
    let pattern=""
    for(let j=1;j<=i;j++){
        pattern +="* "
    }
    console.log(pattern)
}



console.log("Inverted Triangle:")
  for(let i=5;i>=1;i--){
    let pattern=""
    for(let j=1;j<=i;j++){
        pattern +="* "
    }
    console.log(pattern)
}

// For loop applies on the Object
var obj1={HospitalName:"Apollo",Location:'Bengaluru',phno:1234567}
// Method
console.log(Object.values(obj1))
for(x in obj1){
    console.log(x)
    console.log(obj1[x])
}
var array2=["Prashanth",25,1234,"Dharmavarm"]
for( i of array2){
    console.log(i)
}
// For loop
for(let i=0;i<array2.length;i++){
    console.log(array2[i])
    // console.log(i)
}
let k=1
while(k<=5){
    console.log(k)
    k++
}
let a=1
do{
    console.log(a)
    a++
}
while(a<=1)

    // for of Loop on the arrays
    var Data=[3.34,"sai",'madhu']
for( k of Data){
    console.log(k)
}