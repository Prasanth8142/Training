let a=new Promise((resolve,reject)=>{
let status=false
if(status){
    resolve("its a true")
}
else{
    reject("its a false")
}
})

.
then((a)=>{
console.log(a)
})
.catch((b)=>{
console.log(b)
})



//syntax of Promise
// promise Methods:
// Promise all
let promise1=Promise.resolve("Success")
let promise2=Promise.reject("Failure")
Promise.all([promise1,promise2])
.then((a)=>{
console.log(a)
})
.catch(()=>{
console.log('failure')
})


// Promise race():returns based on the time seconds.
// promise allSettled:Both returns
// Promise any:


let pa=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("Success")
}, 2000);
})

let pb=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("fail")
    }, 1000);
})

Promise.race([pa,pb])
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})



Promise.allSettled([pa,pb])
.then((a)=>{

    console.log(a)
})
.catch((b)=>{
    console.log(b)
})

Promise.any([pa,pb])
.then((a)=>{
console.log(a)
})
.catch(()=>{
    console.log(b)
})




// // async and await
//  async function sync(){
//     console.log("Hello")
// }
// sync().then((a)=>{
//     console.log(a)
// })


let m1=new Promise((reject,resolve)=>{
    setTimeout(() => {
        resolve("resolve")
    }, 2000);
})

let m2=new Promise((resolve,reject)=>{
    setTimeout(() => {
       reject("Reject") 
    }, 4000);
})
Promise.race([m1,m2])
.then((b)=>{
    console.log(b)
})

.catch((a)=>{
    console.log(a)
})



let array=[1,2,3,4,5]
console.log(array[0])
console.log(array[1])
let [A,D,V]=array
console.log(A,D,V)


let array2=[1,[2,3,"Prashanth"],[4,6,7,9]]
let[A1,[A2,A3,A4],[A5,A6,A7,A8,A9]]=array2
console.log(A1,A2,A3,A4,A5,A6,A6,A7,A8,A9)



  function name(){
        return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('success')
    }, 1000);
})}

 async function hai(){
     return await name()
}
let b = hai()
console.log(b)
