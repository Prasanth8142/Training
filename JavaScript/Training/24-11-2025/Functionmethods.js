function a(m,b){
    let a={Name:'Prashanth',age: console.log(this)}
      return console.log(m+b)
    }
    //   return console.log(a+b)
   
// call method
let array=['prashnath' ,25,'sai']
console.log(a(a.call))
// console.log(a(20,30))

function greet(age){
    console.log("Hello",this.name,"age:",age)
    console.log(this)
}
const person={name:'Prashanth'}
greet.call(person,25)
function data(a,b){
    // console.log(this)
    return console.log(a+b)
}
data(10,20)

let object={
    name:'prashanth',sec:'B',Location:'Dharmavarm',age:{age:console.log(this)
        // let array=[console.log(this)]
    }
}
console.log(object)
//Apply keyword:
console.log('Apply')
function a (a,b){
return console.log(a==b)

}
a.apply([2,5])


//bind()
function add(){
    console.log(this)
}
const data2={username:"prashnath",sec:'D'}
const res=add.bind(data2)
res()
let data3={
    name:"sai",Location:'ATP',
    hello(){
        console.log(this)
    },
    sai:()=>console.log(this)

}
 console.log(data3.name)
data3.hello()
data3.sai()





console.log('call method in the functions')
let obj1={name:"ayyappa"}

function Hai(a,b){
    console.log(this)
    console.log(a+b)

}
Hai.call(obj1,15,20)



console.log('Apply method in the Functions:')
function bye(c,d,e){
    console.log(this)
    console.log(c)
    console.log(d)
    // console.log(f)
}
bye.apply(obj1,[20,"prashanth",true])



console.log('Bind method in Functions:')
function sorry(a,b){
    console.log(this)
    console.log(a>b)
}
sorry.bind(obj1,10,20)()
