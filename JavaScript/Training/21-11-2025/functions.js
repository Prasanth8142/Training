function print(){
    // Math.floor(Math.random()* (max-min+1))+min
    const random=Math.floor(Math.random() *(100-1+1))+1
    return console.log(random)
}
print()

console.log('function curyying:')
function add(a){
    return function(b){
        return function(c){
            return function(d){
           return a+b==c+d
            }
            
        }
    }
}

var d=(add(10)(30)(40)(10))
console.log(d)
function array(){
    return function data(){
        var a=['prashnath','sai']
       return a.length
    }
    // return a.length
}
console.log(array()())
console.log()

function Reverse(str){
let res=""
for(let i=str.length-1;i>=0;i--){

}
}
Reverse("Prashanth")
console.log(Math.floor(Math.random()*(100-50+1)+50))
console.log('pure function')
let sum=0 
// sum=2
function m(a,b){
    sum+=b
    return sum

}
console.log(m(1,2))
console.log(m(2,4))
// m(2,3))console.log()
console.log(m(10,20))
console.log(this)

 function g (){
    console.log(this)
 }
 g()

 let a=()=>{
    console.log(this)
 }
 a()
 let data={
    name:"sai",Location:'ATP',
    hello(){
        console.log(this)
    },
    sai:()=>console.log(this)

}
 console.log(data.name)
data.hello()
data.sai()

 function sum2(){
    name:'man',function m(){
        console.log(this)
    }
 }
 sum2()



 let array6=[
    'sai','madhu',1234,
    console.log(this),
    {name:'Prashanth',age:24,A:console.log(this)

    }
    ]


    function fruits(){
        let damage=[1,2,3,4,5,6,
            console.log(this)]
        console.log(this)
        let system={loc:'HYD',
            main:console.log(this)}
        
    }
    fruits()
var main={name:'apollo',
    data(){
        console.log(this)
    }
    // history()=

    // }
}
main.data()
// var main={
//     ()=>{

//     }

let system=[1,2,3,4,"sai",{
    a:'sai',b:'madhu'
}]
for( x in system){
    console.log(x)
}

 

