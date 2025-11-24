function div(a){
if(a%3==0 && a%5==0){
    return "it is divisble by 3 and 5"
}
else{
    return 'its is not divisble'
}
}
console.log(div(10))
console.log(div(30))


function vowels(v){
    let count=0
    for(let i=0;i<v.length;i++){
    if(v[i]=='a' || v[i]=='e'|| v[i]=='i' ||v[i]=='o'|| v[i]=='u'){
        count++
    }

}
 return count
}

   
console.log(vowels("Prashanth"))
console.log(vowels("abdul"))




let array=['a','e','i','o','u']
function sum(g){
    let count=0
    for(let i=0;i<g.length;i++){
        for(let j=0;j<array.length;j++){
         if(g[i]==array[j]){
            count++
        }
        
        }
    }
    return count
}
console.log(sum('prashanth'))
console.log(sum("AbdUl"))


// Methods

function reverse(str){
return str.split("").reverse().join("")
}
console.log(reverse("123"))

// Manually
function man(d){
    let ram=''
for(let i=d.length-1;i>=0;i--)
    ram+=d[i]
return ram
}
console.log(man("Abdul"))



function secondelement(j){
    let p=0
    // let vp=0
    for(let i=0;i<j.length;i++){
        if(j[i]<p){
            // vp=p
            p=j[i]
        }
        return p
    }
}
//         else if(j[i]<vp){
//             vp=j[i]
//         }
//     }
//     return vp
// }
console.log(secondelement([6,3,4,40,20]))