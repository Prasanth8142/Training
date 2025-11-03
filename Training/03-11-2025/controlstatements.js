console.log('Control Statements')

console.log('if statement:executes when statement is true')
var car1=500
var car2=300
if(car1>300){
    console.log(true)
}
else{
    console.log(false)
}

if(car1===car2){
    console.log(true)
}
else{
    console.log(false)
}
if(car1=car2){
    console.log(true)
}
else{
    console.log(false)
}
if(car1==car2 && car1>car2){
    console.log('true')
}
else{
   console.log(false)
}
let age=18
if(age>=18){

    console.log('You Can Vote!')
}



console.log('else statement: when executes fail')
var studentname='madhu'
var section='B'
var state='Andhra Pradesh'
         if(studentname==age)
            {
         console.log(true)
        }  
else{
    console.log(false)
}
let temperature=30
if(temperature>50){
    console.log('Its Hot')
}
else{
    console.log('Its Cool')
}
 let DL=10
 if(DL>=18){
    console.log('Apply DL')
 }
 else{
    console.log('Not Eligible for DL')
 }

var name1='madhu'
var name2='prashanth'
if(name1>name2){
    console.log(true)
}
else{
    console.log(false)
}
if(typeof name1==typeof name2){
    console.log(true)
}
else{
    console.log(false)
}


// Switch Statement
console.log('switch:exact value ')
var studentname='madhu'
switch(studentname){
    case 'sai':
        console.log('sai')
        break
    case 'madhu':
        console.log('madhu')
        break
        case 'vamsi':
            console.log('vamsi')
            break
            default:
                console.log('default')

         }

         var phone='iphone'
         switch(phone){
            case 'Android':
                console.log('Android')
                case 'iphone':
                    console.log('iphone')
                    break
                    case 'moto':
                        console.log('moto')
                        break
                        case 'Lava':
                            console.log('Lava')
                            default:
                                console.log('no phone')
         }
        var car1='swift'
        var car2='Innova'
        switch(car1){
            case 'fortuner':
                console.log('foruner')
                break
                case 'swift':
                    console.log('swift car is true')
                    break
                    case 'Indica':
                        console.log('Indica')
                        break
                        case 'VXI':
                            console.log('vXI')
                            default:
                                console.log('Not a car')
                 }
                 switch(car2)
                 {
                    case 'Innova':
                        console.log('Innova')
                        break
                        default:
                            console.log('Not a car')
                 }
