function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function searchData() {
  console.log("Searching...");
}

document.getElementById("search").addEventListener(
  "keyup",
  debounce(searchData, 1000)
);