console.log('Array Methods.')
// indexOf,concat,slice,includes,lastindexOf
let a=(array)=>{

    console.log(array.indexOf('Mumbai'))
    console.log(array.indexOf('UP'))
    console.log(array.indexOf('Karnataka'))
    console.log(array.indexOf("Bihar"))
    console.log(array[0])
//  console.log(array.lastIndexOf('Telagana'))
console.log(array.indexOf(10))
}
a(['AndhraPradesh','Telagana','Karnataka',10,'TamilNadu','Kerala','Mumbai',10])

// lastIndexof Method
function sun(array1){
console.log(array1)
console.log(array1.lastIndexOf(10000))
console.log(array1.lastIndexOf(61))
console.log(array1.lastIndexOf(10))

}
sun([10000,20,10,35,21,61,10])

//concat method
let m=function(vegetables,fruits){
console.log(vegetables.concat(fruits))
}
m(['potato','Brinjal','Tomato','beens'],['Apple','Bananna','orange','Pineapple','Graps'])


// includes method of the array
function river(array2){
    // console.log(array2.includes('kaveri'))
    // console.log(array2.includes('chitra'))
    // console.log(array2.includes("yamuna"))
    for(x of array2){
        if(x.includes('pamba', 'chitra','kaveri', 'yamuna')){
            console.log('yes')
        }
        else{
            console.log('no')
        }
    }
    
}
river(['pamba','kaveri','chitra','penna','Ganga'])


// slice method

function slice(array3){
    console.log(array3.slice())
      console.log(array3.slice(3))
    
}
slice([10,20,30,40,50,70])


function emptyarray(array4){
console.log(array4)
console.log(array4.push('Prashanth','madhu',{name:'Prashanth',age:25}))

console.log(array4)
console.log(array4.length)
console.group(array4.length=1)
console.log(array4.length)
console.log(array4.length=6)
console.log(array4.length)
}
emptyarray([])