// setTimeOut:Runs a function once after a delay
let a="one"
console.log(a)
setTimeout(()=>{
    let b="two"
    console.log(b)
},900)
let c='three'
console.log(c)

// setInterval:Runs a function repetely,after every interval of time
// setInterval(() => {
//     let count=0
//     if(count<=5){
//    let m=5
//    console.log(m)
// count++}
// },1000);


// clearTimeout:Stops a setTimeout before it runs

let timer=clearTimeout(()=>{
console.log(m)
},9000)
clearTimeout(timer)

// clearInterval:stops a setInterval repeated execution
// function clearinterval(){
// let count=0
// let interval=setInterval(() => {
//     count++
//     console.log(count)
//     if(count===5){
//         clearInterval(interval)
//     }
// }, 1000);}
// clearinterval()