// let button=document.getElementById('button')

// let a=0
// button.addEventListener('click',function(){
//     a+=1
//     console.log("value of a",a)
// console.log('button clicked')
// })

// let b=0
// let lastclick=0

// button.addEventListener('click',function(){
//     let present=new Date()
//     if(present-lastclick>2000){
//         console.log('value of b is',b)
//         b+=1
//         lastclick=present
//     }
//     // console.log('button clicked')
// })

// let c=0
// let timer
// button.addEventListener('click',function(){
//     clearTimeout(timer)
//     timer=setTimeout(() => {
//         c+=1
//         console.log('value of c is',c)
//     }, 2000);
// })


// // call back function


// function sum(s){
// console.log(s)
// }
// function name(a,b,c){
//     console.log('Inner function')
// c(a+b)
// }
// name(1,2,sum)
// let list=document.getElementById('list')
// list.addEventListener('click',(g)=>{
// console.log(g.target)
// })


// let n=new Promise((reso,reject)=>{
// let status=true
// if(status){
//     resolve('true')
// }
// else{
//     reject('false')
// }
// })

// console.log(Math.minLargest(10,20,30))