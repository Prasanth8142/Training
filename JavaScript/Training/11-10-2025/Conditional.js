console.log('conditional Statements:')
console.log('if statement:')
let age=25
if(age>=18){
    console.log('you are eligible to vote:')
}

let student='sai'
if(student=='sai'){
    console.log(true)
}
let car='Toyota'
if(car=='Toyota'){
    console.log('Car')
}
var address='Man'
if(address=='Man'){
    console.log('Man:')
}
let dimension='sqaure'
if(dimension=='sqaure'){
    console.log('sqaure:')
}

console.log('if else statememt:')
let marks=40
if(marks>=50){
    console.log("you passed the exam")
}
else{
    console.log('You failed the exam:')
}


let climate='cool'
if(climate=='hot'){
    console.log('Climate')
}
else{
    console.log(false)
}
console.log('if..else if..else statement:')
let temperature=30
if(temperature>35){
    console.log("Its too hot: ")
}
else if(temperature>25){
    console.log('weather is cool')
}
else{
    console.log('its cool outside')
}
console.log('Nested if statement:')
let username='admin'
let password='1234'
if(username==='admin')
    {
    if(password==='1234')
        {
        console.log('Login successful')
    }
    else{
        console.log('Login incorrect:')
    }
}
    else{
console.log('Invalid username:')
    }
console.log('switch statement:')
let day=3
switch(day){
    case 1:
        console.log('Monday:')
        break
        case 2:
            console.log('Tuesday:')
            break
            case 3:
                console.log('Wednesday:')
                break
                case 4:
                    console.log('Thursday:')
                    break
                    case 5:
                        console.log('Friday:')
                        break
                        case 6:
                            console.log('Saturday:')
                            default:
                                console.log('default:')

                             }