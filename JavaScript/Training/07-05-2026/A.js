function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}



async function retryApi(apiFn, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await apiFn();
      return result; // Stop if success
    } catch (error) {
      console.log(`Attempt ${attempt} failed`);

      // Stop after last retry
      if (attempt === retries) {
        throw error;
      }

      // Wait before next retry
      await new Promise((resolve) =>
        setTimeout(resolve, delay)
      );
    }
  }
}



Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    // Skip empty indexes in sparse arrays
    if (i in this) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};