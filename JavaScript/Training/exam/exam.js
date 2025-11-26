function divisible(a,b){
    if(a%3==0 && b%5==0){
        console.log("Both divisible by 3&5")
        // console.log(b)
    }
    else{console.log("not Divisible")}
}
divisible(12,56)
// 67,55




let n=2
for(let i=1;i<=10;i++){
    console.log(n + "x" + i + "=" +(n*i))
}

function vowels(a){
    let count=0
    for(let i=0;i<a.length;i++){
    if(a='a,e,i,o,u'){
       count++
    }
}
    return count
}
console.log(vowels(['prasanth']))



function string(str){

    return str.split("").reverse().join(" ")
}
console.log(string("Jeevankumar"))


function arraysum(array){
    let sum=0
    for(let i=0;i<array.length;i++){
  sum+=array[i]
    }
    return sum
}
console.log(arraysum([1,2,3,4,5,6,7,8,9,10]))

function max(b){
let highest=0
for(let i=0;i<b.length;i++){
    if(b[i]>highest){
        highest=b[i]
    }
}
return highest
}

console.log(max([12,23,4,24,90,1000]))

function min(m){
    let lowest=m[0]
    for(let i=0;i<m.length;i++){
        if(m[i]<lowest){
            lowest=m[i]
        }
    }
    return lowest
}

console.log(min([6,2,3,4,5]))

// using loop

// let a="prashanth"
// let rev=""
// for(let i=a.length-1;i>=0;i--){
//     rev+=a[i]
// }
// console.log(rev)


function array4(f){
let first=0
let second=0
for(let i=0;i<f.length;i++){
    if(f[i]>first){
        second=first
        first=f[i]
        //  second=first
        
    }
    else if(f[i]>second ){
        second=f[i]
    }
}
return second
}
console.log(array4([1,2,3,4]))


function fab(num){
let a=0
let b=1
// console.log(a)
// console.log(b)
for(let i=1;i<=num;i++){
    let next=a+b
    console.log(next)
    a=b
    b=next
}

}
fab(20)
function array5(data){
for(let i=0;i<data.length;i++){
    if(data[i]%2==0){
        continue
    }
 console.log(data[i]) 
}
  
}
array5([1,2,3,4,5,6])


function countstring(str){
let count=0
for(let i=0;i<str.length;i++){
    str[i]
    count++
}
return count
}
console.log(countstring("Vams iee"))
console.log(countstring("prashanth")
)


function vowels(d){
var count=0
for(let i=0;i<d.length;i++){
    if(d[i]==`a`||d[i]==`e`|| d[i]==`i`||d[i]==`o`||d[i]==`u`)
        {
        console.log('This is vowels')
        count++
    }
    // else if(d.length-count){

    // }
    // else if{
    //     count
    // }
   

}console.log("Consonants length:",d.length-count)
 return count

}
var m2=vowels(("aeioufefef"))

console.log( 'vowels', m2)



// function repeat(str){
//     let  count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i]==str){
//             count++
//         }
        
//     }
//     return count

// }
// console.log(repeat("Prashanth"))

// function factorial(fa)
// {
    
//     for(let i=0;i<ab.length;i++)
// }
// factorial(5)
function factorial(f){
 let fam=1
    for(let i=1;i<=f;i++){
        fam*=i
    }
    return fam
}
console.log(factorial(6))

