console.log('Functions:')
console.log('Function is a block of code,to do some task &Return some value')
console.log('function declaration: functionkeyword + brackets')



// ******Functionsyntax*****
function d(){
var studentdetails={name:'prashanth',surname:'kodekandla',age:25,section:'b',ph:7993663745}
console.log(studentdetails)
console.log(studentdetails.ph)
console.log(studentdetails.section)
console.log(studentdetails.ph)
console.log(typeof studentdetails)
console.log(studentdetails.ph)
}
d()


function man(){
    var data=['Prashanth',4.495,'bsection',8142255,'sai']
    console.log(data)
    console.log(typeof data)
    console.log(data[0])
    console.log(data[4])
    console.log(data.length)
    
}


// Arrays using loops
var data=[1,2,3,4,5,'vam','sai','prash']
for(let i=0;i<data.length;i++){
    console.log(data[i])
    
}
console.log('Named function expression')
var items=function g(){
    let price1=4500
    let price2=4500
    let total=price1+price2
    console.log(total)
}
items()
 var restaurent=function p(){
    var price={cb:350,mb:550,drinks:50,gobi:250,gst:20}
    console.log(price)
 }
restaurent()


console.log('annonomus function')
var gym=function (){
    let monthfee=3000
    let quaterlyfee=6000
    let annualyfee=12000
    let total=monthfee+quaterlyfee
    console.log(total)
}
gym()


var travels=function (){
    var a={hyd:4000,beng:8000,chennai:12000,mumbai:15000}
    var g=a.hyd-a.beng
    console.log(a)
    console.log(g)
}
travels()


console.log('Arrow function')
 
var college=()=>{
    var name='Madhu'
    var surname='sake'
    var Gender='male'
     let number=9347691583
     var address='Dharmavarm'
     console.log(name)
     console.log(surname)
     console.log(typeof number)
     console.log(name+' ' + ' '+surname +' ' + Gender+ ' ' + number + '' + ' '+ address)
}
college()

