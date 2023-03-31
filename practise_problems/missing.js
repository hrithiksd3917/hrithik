const arr = [1, 2, 3, 5, 6];

const n = arr.length + 1;
const sumOfSequence = (n * (n + 1)) / 2;

let sumOfArray = 0;
for (let i = 0; i < arr.length; i++) {
  sumOfArray += arr[i];
}

const missingNumber = sumOfSequence - sumOfArray;
console.log("Missing number:", missingNumber);