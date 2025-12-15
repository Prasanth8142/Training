let a=document.getElementById('Innertext')
function inner(){
    alert('Hai')
}
a.addEventListener('click',inner)
// console.log(a.parentElement)




let c=document.getElementById('div1')
function d(){
    console.log('top parent of the element')
}
c.addEventListener('click',d)




let b=document.getElementById("div")
function m(){
    console.log('parent element')
}

b.addEventListener("click",m ,true)
let d1=document.getElementById('list')
// function list(){
//     console.log('list')
// }
d1.addEventListener('click',function(e){
    console.log(e.target.innerText)
})
let m1=new Promise()
console.log(m1)
let n1=document.getElementById("scroll")
n1.addEventListener('scroll',function(){
    console.log('scroll')
})
console.log(window)