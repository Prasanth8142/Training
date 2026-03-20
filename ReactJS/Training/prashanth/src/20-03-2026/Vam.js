function countWords(sentence) {
  const words = sentence.split(" ");
  const count = {};

  for (let word of words) {
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }

  return count;
}

const input = "hello world hello";
console.log(countWords(input));