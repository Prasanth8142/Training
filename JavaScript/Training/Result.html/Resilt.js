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
    let p=[]
    for(let i=str.length-1;i>=0;i--){
        p+=str[i]
    }
    console.log(p)
}
(palindrome("Prashanth"))

// 