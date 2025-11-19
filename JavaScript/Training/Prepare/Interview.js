var a=function (str){
    return str.split("").reverse().join("")
}
console.log(a("sai"))


function ispalindrome(str){
    const res=str.split("").reverse().join("")
    return str==res
}
console.log(ispalindrome('man'))


function LargestElementArray(arr){
    let largest=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
        
    }
    return largest

}
 console.log(LargestElementArray([99,45,78,100]))

