// function a(a,b,...g){
//     console.log(a,b)
//     console.log(g)
// }

// a(1,23,4,4,442425,5677,45767687,7778758)




function defaul(a=10,b=10){
   console.log(a,b)
}
defaul()



// shallow copying of object:
let obj1={
    name:"Prashanth",
    age:25,
    Proof:{
        city:"Dharmavarm"
    }
}
let obj2={...obj1}
obj2.name="Vamsi"
obj2.age=25
obj2.Proof.city="Hyderabad"
console.log(obj1.Proof.city)
console.log(obj2.Proof.city)
obj2.village='ATP'
console.log(obj1.name)
console.log(obj2.name)
console.log(obj2.age)





// Deep copy:  Deeep clone Object
let obj3={
    name:'Abdul',
    age:25,
    city:'HYD',
    Data:{
        name:"Hari"
    }
}

let obj4=JSON.parse(JSON.stringify(obj3))
obj4.name="VAm"
obj4.city="Bengaluru"
console.log(obj3.name)
console.log(obj4)
obj4.Data.name='Prash'
//obj3.Data.name='Prash'
obj3.name='Prashanth'
console.log(obj4.Data.name)
console.log(obj3.name)





function high(a){
        return "hello"+a
}
function yes(b){
    
    console.log(b(20))
    // high(a)
}
yes(high)
  

let c2=100
function count(){
    console.log(c2++)
}

let m=setInterval(() => {
    console.log("setinterval")
}, 2000);
let y=setTimeout(() => {
    console.log('setTimeout')
}, 2000);
clearTimeout(y)
 clearInterval(m)




  let y1= new Date()
  console.log(y1)

 let d6=document.getElementById('btn')
 let lastclick=0
 let count1=0
d6.addEventListener('click',()=>{
    let current=new Date()
    if(current-lastclick>2000){
        count1++
        console.log('Throttling Clicked',count1)
        lastclick=current
    }
})

