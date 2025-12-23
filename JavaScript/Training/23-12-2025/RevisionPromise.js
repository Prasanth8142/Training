// Promise all
// promise Race
// PromiseallSettled
// Promise any
// async And Await

let a=new Promise((resolve,reject)=>{
    setTimeout(() => {
        return resolve('resolve')
    }, 6000)
      })

let b=new Promise((resolve,reject)=>{
    setTimeout(() => {
        return reject("Reject")
    },9000)
     
})

Promise.race([a,b])
.then((a)=>{
    console.log(a)
})
.catch(()=>{
    console.log(b)
})
Promise.all([a,b])
.then((a)=>{
    console.log(a)
})
.catch(()=>{
    console.log(b)
})
Promise.allSettled([a,b])
.then((a)=>{
    console.log(a)
})
.catch(()=>{
    console.log(b)
})

Promise.any([a,b])
.then(()=>{
    console.log(a)
})
.catch(()=>{
    console.log(b)
})



// function random(){
//     return Math.round( Math.random()*(10-1+1)+1)
// }
// console.log(random())


function time(){
    let count=0
    setInterval(() => {
        if(count<=5){
            console.log("Normal Event:",count)
            count++
        }
    }, 200);
}
time()

localStorage.setItem("name",'Prashanth')
console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')
console.log(localStorage.getItem('name'))
// try{
//     console.log("hai")
   
// }
// catch(e){
//     console.log(e)
// }
