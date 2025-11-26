// what is javascript.
// static webpage to dynamic webpage:
// front - backend (API:application Programming Interface)
// backend -database(Model)
// keywords of javascript.
// 1.var,2.let,3.const

// 1.primtive datatypes:single value in single memory
// 2.Reference or Non primitive data types: multiple values in single memory
// 1.primitive datatypes:
// a)String,b)Number,C)Boolean ,D)undefined ,E)Null ,F)BigInt,g)Symbol
// String:Collection of characters "",'.',``

var a="Webdevelopemnt"
console.log(a)

var number=123
var b=12.566
console.log(number)
console.log(b)

var D
console.log(D)
var d=null
console.log(d)

var e=123n
console.log(typeof e)


var a1=true
var a2=false
console.log(typeof a1,typeof a2)




var a4=Symbol('date')
var a5=Symbol('time')
console.log(a4==a5)


// functions:its a blockof code to do some task and return some value
// function name(){

// } 1.function declaration:
// 2.Function Experssion
function name(){
    let obj={name:"infotech",location:"HYD"}
    return obj
}
console.log(name())
// 2.function experssion:
// a)Named ,Annonomus,Arrow
// named function
var D=function hai(){
console.log('named')
}
D()

// b)Annonus function
var h=function (){
console.log('Annonous')
}
h()
// c)Arrow function
var a=()=>{
    console.log('Arrow function')
}
a()



let array=[1,"infotech",8142,1,"infotech"]
let store=null
for(let i=0;i<array.length;i++){
    for(let j=0;j<=i;j++){
        if(array[i]==array[j])
            store=array[i]
    }
}
console.log(store)


function greater(a,b){
    if(a>b){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
greater(10,20)

function table(t){
for(let i=1;i<=10;i++){
    console.log(t+'x'+i +"="+ (t*i))
}
}
table(20)
// 2X1=2
let max1=0
function maxlength(array){
    let max1=array[0]
    let min1=array[0]
    for(let i=0;i<=array.length-1;i++){
        if(array[i]>max1){
           max1=array[i]
        }
         if(array[i]<min1){
            min1=array[i]
         }
        
    }
    console.log(max1)
    console.log(min1)
    
   

}
maxlength([2,5,30,40,100,400,1,3])

function reversestring(m){
return m.split("").reverse().join("")
}
console.log(reversestring("NYBINFOTECH"))

function secondelement(array3){
    let p=0
    let vp=0
    for( x of array3){
        if(x>p){
            vp=p
            p=x
        }
        else if(x>vp&& x<p){
            vp=x
        }
    }
    console.log(vp)
}
secondelement([10,20,40,80])




function repeatedElement(array4){
let count=0
for(let i=0;i<array4.length;i++){
    for(let j=i+1;j<array4.length;j++){
        if(array4[i]==array4[j]){
            console.log(array4[i])
            count++
            
        }
    }

}
console.log(count)
}
repeatedElement([10,20,10,30,10,40])




// function jaggedArray(array5){
//     let min=array5[0]
//     for(let i=0;i<array5.length;i++){
//         if(array5[i]<min){
//             min=array5[i]
//         }
//         // else {
//         //     console.log(array5[i]=min)
//         // }
//     }
//     console.log(min)

// }
// jaggedArray([60,20,10,20,100,15])



