const message=document.getElementById("message")
const login=document.getElementById("login")
const logout=document.getElementById("logout")
 check()
login.addEventListener("click",()=>{
    localStorage.setItem("Token",1234)
  check()
    
})


logout.addEventListener("click",()=>{
    localStorage.removeItem("Token")
    check()
})

function check(){
    const token=localStorage.getItem("Token")
    if(token){
        message.innerText="Hello User"
       
    }
    else{
           message.innerText="Please Login"
       
    }
}
// localStorage.removeItem("company")
// console.log(localStorage.getItem())