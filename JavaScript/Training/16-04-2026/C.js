fetch("https://jsonplaceholder.typicode.com/posts")
.then((d)=>d.json() )
.then((data)=>console.log(data))
