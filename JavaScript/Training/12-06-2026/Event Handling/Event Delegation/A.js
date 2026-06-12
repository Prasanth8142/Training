let a=document.getElementById("list")
a.addEventListener("click", (event) => {
  console.log("Clicked:", event.target.textContent);
});