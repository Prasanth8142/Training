function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function handleScroll() {
  console.log("Scroll Event");
}

window.addEventListener(
  "scroll",
  throttle(handleScroll, 1000)
);