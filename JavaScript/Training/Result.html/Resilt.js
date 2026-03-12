// function palindrome(str){
// let p= str.split(" ").reverse().join(" ")
// if(p===str){
//     console.log('palindrome')
// }
// else{
//     console.log('not a palindrome')
// }
// }
// palindrome("RaceCar")
// palindrome("vam")
function palindrome(str){
    // let p=[]
    // for(let i=str.length-1;i>=0;i--){
    //     p+=str[i]
    // }
    // console.log(p)
    // if(p==str){
    //     console.log("Palindrome")
    // }
    return str.split("").reverse().join("")
}
console.log(palindrome("Prashanth"))
// palindrome('racecar')

// 
// deep clone

let a={name:'Prashant',vam:{
    vam:"section"
}}
let b=structuredClone(a)
b.name="Prashgshd"
console.log(b)



// let m1=[1,2[3,4,5,6]]
// let m2=m1.flat(3)
// console.log(m2)