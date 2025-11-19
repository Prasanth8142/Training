console.log("Iterative Loops")
// for in
// for of
// for each
console.log('for in loop')
// for in loop:Used to Object Properties
var Iphones={'Iphone13':40000,'Iphone14':50000,'Iphone15':60000,Android:{'Moto':15000,'Samsung':20000,"oneplus":25000}}
for( i in Iphones){
    console.log(i + " =" +Iphones[i])
    // console.log(Iphones.Android)
}
for( x in Iphones){
    console.log(Iphones.Android)
    break
}
// for( x of Iphones){
//     console.log(x)
// }
// Symbol.iteration method not there in objects
var Data=()=>{
var Colleges={'Chaitanya':'MPC','Narayana':'BIPC','Raghavendra':'CEC'}
for(i in Colleges){
    console.log(i + " :"+ Colleges[i])
    
}
}
Data()

// Functions Using on these

function Array(){
console.log('for of Loop:')
var Array=['Prashanth',1500,'Madhu','sai',4500,{1:"prashanth",2:'Madhu'}]
for(y of Array){
    console.log(y )
    // console.log(Array)

}
}
Array()
// for in loop also used in Arrays Output is Index values:

var Hospital=['Anantapur','Dharmavarm','Puttapathri',`Bathalapalli`]
for(let i=0;i<Hospital.length;i++){
    console.log(i +": " +Hospital[i])
}
for(i=Hospital.length;i>=0;i--){
    console.log(i +":"+Hospital[i])
}

console.log("For each Loop:")
const fruits=['Apple','Bananna','Orange','Mango']
fruits.forEach((values,index,Array)=>{
    console.log(values,index,Array)
})
console.log(fruits.length)


// for loop using this
const nums=[4,2,3,7,9,10,13,15,65]
nums.forEach((s) =>{
if(s %2 ==0){
    console.log("Even:" + s )
}
})
var a="prashanth"
for( x of a){
console.log(x)
}
for( s of Hospital){
    console.log(s)
}
// for of used on the Arrays,Strings