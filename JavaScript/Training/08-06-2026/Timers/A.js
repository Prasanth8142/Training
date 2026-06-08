setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);


const timer = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timer);



setInterval(() => {
  console.log("Running every 2 seconds");
}, 2000);


const interval = setInterval(() => {
  console.log("Hello");
}, 1000);

clearInterval(interval);