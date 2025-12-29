// API:Application Programming Interface:


let datas=[]
// https://jsonplaceholder.typicode.com/albums
let data=fetch("https://jsonplaceholder.typicode.com/users")
.then((a)=>{
    return a.json()
console.log(a)
})

.then((c)=>{
    datas=c
    console.log(c)
})

.catch((b)=>{
    console.log(b)
})

// console.log(datas)