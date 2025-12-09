console.log(`Math Methods:`)
let a1=12.556
console.log(Math.floor(a1))
console.log(Math.ceil(a1))
console.log(Math.round(a1))
console.log(Math.sqrt(10))
console.log(Math.pow(2,2))
console.log(Math.floor(Math.random()*(9999-1000+1))+1000)
var a2=Math.abs(-14)//return a postive value
console.log(a2)

//square root
var a3=Math.sqrt(25)
console.log(a3)

// Maximum
var a3=Math.max(10,25,40,100)
console.log(a3)

// Minimum
var a5=Math.min(10,2,100,20,10)
console.log(a5)
// Random
console.log(Math.floor(Math.random()*(999-500+1))+500)

// trunc keep only integers
console.log(Math.trunc(-4.7))
// sign shows signs of a number
console.log(Math.sign(-3))
console.log(Math.sign(6))
console.log(Math.sign(0))
// Cube root
console.log(Math.cbrt(27))
// Log base e
console.log(Math.log(1))

function rolldice(){
    return Math.floor(Math.random()*(6-1+1)+1)
}
console.log("You roll dice",rolldice())
