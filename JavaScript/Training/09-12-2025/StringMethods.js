// Length of a string: Return number of a characters of a string

let name="prashanth"
console.log(name.length)
// toUpperCase():Covers Capsi characters
console.log(name.toUpperCase())
// toLowerCase()
console.log(name.toLowerCase())


let logo="        Welcome-to-the-StateBankOfIndia "
// trim:Remove spaces from start to end
console.log(logo.trim())
let name1="  hi"
console.log(name1.trimStart())
console.log(name1.trimEnd())

// slice:Extracts part of String: start,end
let str="InfoTech"
console.log(str.slice(0,4))
console.log(str.slice(4))

// substring:similar to slice there is no negative values
console.log(str.substring(1,3))
// replace()
let msg=" Hai welcome to Bank"
console.log(msg.replace("Bank","India"))
console.log(msg.replaceAll())
let Hospital='Apollo is a good'
// includes
console.log(Hospital.includes("good"))
// startWith,endWith
console.log(Hospital.startsWith('Apollo'))
console.log(Hospital.endsWith('Good'))
// charAt()
console.log(Hospital.charAt(4))
// charCodeAt()
console.log("ABC".charCodeAt(1))
// split()
let obj="How are you"
console.log(obj.split())
// repeat()
console.log(obj.repeat(4))
// concat
console.log("Hello".concat(" ","world"))
// padStart()
console.log("3".padStart(5,"*"))
// toString
let a4=456
console.log(a4.toString())


function studentdata(){
    // var obj={vamsi:70,madhu:78,Prashanth:67}
// switch(obj){
//     case "Vamsi":
//     console.log(name , percentage)
//     break
//     case "Madhu":
//     console.log(name,percentage)
//     break
//     case "Prashanth":
//         console.log(name,percentage)
// }
var data={vamsi:{telugu:70,english:78,Maths:45},Madhu:{telugu:56,english:79,Maths:89},Kiran:{
    telugu:56,english:67,Maths:78}}

function studentdata(name){
var marks=data[name]
var total=name.data.telugu+marks.english+marks.Maths
console.log(total)
}
}

studentdata("vamsi")