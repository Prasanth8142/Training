let arr1=['a',123,"Prashanth",'madhu',11234,'don']
let i=0
let count=0
while(arr1[i]!==undefined){
    count++
i++
}
// console.log(count)
// arr1.splice(8)
// console.log(arr1)
console.log(arr1.includes("Prashanth"))
console.log(arr1.indexOf("Prashanth"))
let a=[123]
let b=[4,2,3,4]
let c=b.slice(2)
console.log(c)
console.log(a.concat(b))
