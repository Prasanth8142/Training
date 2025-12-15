// var a=document.getElementById('name')
// console.log(a)
// let parentelement=a.parentElement
// console.log(parentelement)
// console.log(parentelement.children)
// console.log(parentelement.firstElementChild)
// console.log(parentelement.lastElementChild)



// // creating a dom element
// let creatingelement=document.createElement('h1')
// console.log(creatingelement)
// creatingelement.innerText=' creating element'
// console.log(creatingelement)
// parentelement.appendChild(creatingelement)
// parentelement.append(creatingelement)
// console.log(parentelement.nextSibling)
// // parentelement.before(creatingelement)
// // document.body.appendChild(creatingelement)
// let btn=document.getElementById('btm')
// console.log(btn)
// // btn.onclick=function(){
// //     console.log('aker')
// // }
// btn.onclick=function vam(){
//     alert('Button Clicked')
//     btn.innerText='Hello'
//     console.log('welcome')
// }
// // ()

// let m=document.createElement('h4')
// console.log(m)
// m.innerText='jai'
// parentelement.after(m)
// let apple='click'
// let banna='clcik'
// setTimeout(()=>{
//     console.log(banna)
// })
// setTimeout(() => {
    
// }, timeout);

// setTimeOUT:its a fuction exectue at 
// let one =1

// let two=2
// let three=3
// console.log(one)
// setTimeout(() => {
//  console.log(two)   
// }, 3000);
// console.log(three)


let count=0
let interval=setInterval(() => {
    count++
    console.log()
    if(count===10){
        clearInterval(interval)
    }
}, 1000);
