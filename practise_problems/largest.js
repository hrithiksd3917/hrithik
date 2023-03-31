const arr = [10, 5, 8, 20, 9];
let largest = arr[0];
let secondLargest = -Infinity;
let thirdLargest = -Infinity;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    thirdLargest = secondLargest;
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest) {
    thirdLargest = secondLargest;
    secondLargest = arr[i];
  } else if (arr[i] > thirdLargest) {
    thirdLargest = arr[i];
  }
}

console.log(secondLargest); 
console.log(thirdLargest); 







