// Testing of Array

let array=[3,2,3,4,5,6,7,8,9,10]
console.log(array.some(i => i>=0))


console.log(array.every(i => i>=4))


let data=[1,2,3,4,5]
console.log(data.join(" + "))

function swap(a,b){
    console.log(a,b)
    let temp=a
    a=b
    b=temp
    console.log(a,b)
}
swap(5,10)



function sort(array1){
for(let i=0;i<array1.length;i++){
    for(j=0;j<array.length-1;j++){
        if(array1[j]>array1[j+1]){
            let temp=array1[j]
            array1[j]=array1[j+1]
            array1[j+1]=temp
        }
    }
}
return array1
}
console.log(sort([9,8,7,6,5,4,3,2,1]))


let array2=[90,80,70,60,50,20]
console.log(array2.sort((a,b) =>a-b))


let arr6 = [9, 5, 4, 3, 1];
for (let i = 0; i < arr6.length; i++) {
    for (let j = i + 1; j < arr6.length; j++) {
        if (arr6[i] > arr6[j]) {
            let temp = arr6[i];
            arr6[i] = arr6[j];
            arr6[j] = temp;
        }
    }
}


 
console.log(arr6);
 let array5=[1,2,3,4,5,7,1,2]
 console.log(...new Set(array5))
 array5.forEach((i,j,k)=>
    console.log(i,j,k)
 
 )

 let m=[]
 for( x of array5){
  if( m. indexOf(x)==-1){
    m.push(x)
  }
 }
 console.log(m)

 let array7=[1,2,3,4,5,5,["prashanth",'madhu'],[1,2,3,4,5]]
 console.log(array7.flat(2))
 console.log(array5.reduce((i,j) =>i+j))
 console.log(array5)
 console.log(array5.map(i=> i+1))