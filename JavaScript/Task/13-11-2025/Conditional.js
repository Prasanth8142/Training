console.log("Conditional Statements")
console.log('switch:')
// Switch Statement Applies on Objects with the help of arrow Function:
var obj=()=>{
var Bank={Name:"KodekandlaPrashanth",Age:25,Bloodgroup:'B+',ACCNO:123456,Mble:8142255321,Paswrd:"Prash@8142"}
switch(Bank.Name){
    case 'KodekandlaPrashanth':
        console.log('Welcome to bank')
        break
        case 'MAdhu':
            console.log("miss match of your name")
            break
            case 'sai':
                console.log('miss match of your name:')
        default:
            console.log('No bank Account')
         }
              switch(Bank.ACCNO){
            case 123456:
                console.log('Login SuccessFul')
                break
                case 65453366:
                    console.log('Wrong Account number entered')
                    break
                    default:
                        console.log('Create a new Bankaccount')
         }
         switch(Bank.Paswrd){
            case "1234":
                console.log('Wrong password')
                break
                case "Prash@8142":
                    console.log("Correct Password")
                    break
                    case "#4632363":
                        console.log('wrong password')
                        default:
                            console.log("Forgot Password")
          } 
          }
           obj()

           
// switch statement applies on Arrays
        var Fruits=['Apples','Mangoes','Pineapple','Bananna','Starwberry','Lemon']
        switch(Fruits[0]){
            case 'Mangoes':
            console.log(false)
            break
            case 'Pineapples':
                console.log(false)
                break
                 case 'Apples':
            console.log("It is a fruit")
                break
                case'Bananna':
                console.log(false)
                break
                case 'Starwberry':
                    console.log(false)
                    case 'Lemon':
                        break
                        console.log(false)
                        default:
                            console.log('No Fruits')
              }

        console.log('truthy cases:')
        if("Hello"&& 42 && 3.14 &&[]&&{}&&true&&"0"&&"false"){
            console.log('truly')
        }
        else{
            console.log('falsy')
        }


    console.log('FalsyCases:')
if(false && 0 && -0 && 0n &&"" &&null && undefined &&NaN){ console.log(true)}
        else{ console.log("false")}
     if(""){console.log('truly')}else{console.log('Quotates')}
     if(NaN){console.log('Truly')}else{console.log("NaN")}
     if(-0){console.log("truly")} else{console.log("-0")}
     if(0n){console.log("Truly")}else{console.log('0n')}
     if(null){console.log('Truly')}else{console.log('null')}
     if(undefined){console.log('Truly')}else{console.log('Undefined')}
     
