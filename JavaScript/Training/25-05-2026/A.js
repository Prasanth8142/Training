function changeText() {
  document.getElementById("title").innerText = "Welcome!";
}



const para = document.createElement("p");
para.innerText = "New Paragraph";

document.body.appendChild(para);



const button = document.getElementById("btn");

button.addEventListener("click", function () {
  alert("Button Clicked!");
});

for (let i = 1; i <= 5; i++) {
  console.log(i);
}



console.log("Loops")
// Loops=Same task again and again
let array=[2,3,4,6,7,8,9,10,20]
let array2=[2,3,5,7,8,8,4,6]
let array3=[5,5,6.5,5,6,6,6,6,6,6,6,6,6,6,]
function animal(array){
    for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        console.log(array[i] + "Even number of array elements")
    }
    
}
}
animal(array)
animal(array2)
animal(array3)
console.log('Pattern Programming:')
let n=5
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        
    }
    console.log("*")
}

console.log('Loop:To do same task again &again')
console.log('There are 2 Types Of Loops:')
console.log('1.Conditional Loop')
console.log('2.Uncoditional Loop')


console.log('1.conditional Loop')
// 1.for loop
// 2.while loop
// 3.Do while loop
// 4.infinity loop


console.log('a.forloop')
let a=10
let count=0

for(let i=1;count<a;i++){

if(i%2==0)
{
     console.log(i)
     count++
}
    
    
    }
   for(i=1;i<=a;i++){
    if(i%2!=0){
        console.log(i)
    }
   }
for(i=1;i<=5;i++){
    console.log('Hello:',i)
}
//    for(i=1;a=10;i++){
//     console.log(a)
//    }

console.log('b.while loop:')
let b=1
while(b<=10){
    console.log(b)
    b++
}
while(b<=20){
    console.log(b)
    b++

}
let num=1
while(num<=5){
    console.log('Number:',num)
    num++
}
console.log('c.Do while:')
let c=1
do{
    console.log('Value:',c)
    c++
}
while(c<=5)

    let c2=1
do{
    console.log('value2:',c2)
    c2++
}
while(c2<=10)

    console.log('infinity loop:')
    console.log('condition doesnt fails')
    // for(c;c>1;c++)
    //     {
    //     console.log(c)   
    // }

