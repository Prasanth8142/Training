

let a=document.getElementById("parent")
a.addEventListener( "click", () => {
    console.log("Parent Clicked");
  },
  true
)

let b=document.getElementById("child")
b.addEventListener("click",() => {
    console.log("Button Clicked");
  },
  true)