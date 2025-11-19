console.log('Functions:')
function data(a=100,b=undefined,c=null){
    // return a
    console.log(a,b,c)
}
data(10,20,undefined)

console.log("rest parameters &Arguments:")
function array(a,...f){
    console.log(a)
    
console.log(f)
console.log(arguments)
console.log(arguments.length)
}
array(10,20,30,30,40,50)
function priority(a="sai"){
    console.log(a)
}
priority("prashanth")
