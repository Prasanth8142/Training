function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ")
}


console.log(reverseWords("JavaScript is powerful"));






function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}


console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));



function sortAscending(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}


console.log(sortAscending([9, 5, 3, 7]));
