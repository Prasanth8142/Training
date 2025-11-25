// Array methods
function man(){
let array=["apple",150,"mango",200,"bananna",50,"Grapes",100]
let count=0
let i=0
while(array[i]!==undefined){
    count++
    console.log(array[i])
    i++
}
console.log(count)

// Array length using method
console.log(array.length)
}


// using push method in the array:add elements in the last of the array
let a=()=>{
let cityies=['dharmavarm','Anantapur','Puttapathri','Hindupur',[1,2,3,4,5,6,7,8,9,10]]
cityies.push('sai')
console.log(cityies)
console.log(cityies[4])
for(let i=0;i<cityies.length;i++){
    console.log(i ,cityies[i])
}
}
a()


//using unshift method on the arrays add element in the starting of the array
const countries=["India","USA",'Russia',`England`,`SouthAfrica`]
console.log(countries)
countries.unshift("Newzeland")
console.log(countries)
let count1=0
for(let i=0;countries[i]!==undefined;i++){
    count1++
}
console.log(count1)


// Pop method:remove element at the last
let books=[200,100,150,200,180,175,120]
console.log(books)
books.pop()
console.log(books)
console.log(books.length)


// Shift:Remove the element at the starting of the array:
let items=['Board','Chakpiece','Duster','Board']
console.log(items)
items.shift()
console.log(items)

// splice:splice(index,deletecount,newitem)

let mobiles=["iphone",'Moto',"Samsung",'Oneplus','Realme','Vivo','Iqz']
console.log(mobiles)
mobiles.splice(3,0,'sai')
console.log(mobiles)
mobiles.splice(0,0,'celkon')

console.log(mobiles)
mobiles.splice(0,1,0)
console.log(mobiles)


// concat:Join Two Arrays
let cars=["Indica",'swift','Innova','Scorpio',"BMW"]
let costs=[100000,14.14577,45677,1909909,565757]
console.log(cars.concat(costs))

// slice:copy of portion of arrays:
let data=[123,'vizag','ap',1234,'DMM']
console.log(data)
let m=data.slice(2)
console.log(m)




// indexof:finc index of element
let animals=['cow','fox','elephant','tiger','Lion','fox']
console.log(animals.indexOf("elephant"))
console.log(animals.indexOf("fox"))
console.log(animals.indexOf("cow"))
console.log(animals.indexOf("Lion"))

function mix(a){
    console.log(a)
    a.push('water')
    console.log(a)
    a.unshift('Milk')
    console.log(a)
    a.pop()
    console.log(a)
    console.log(a.includes('milk'))
    console.log(a.indexOf('mike'))
    a.shift()
    console.log(a)
    a.splice(1,0,'man')
    console.log(a)

}
mix(['man','mike','milk','shampooo'])
