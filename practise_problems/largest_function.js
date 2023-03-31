
const arr = [10, 5, 20, 15, 30];

function findSecondAndThirdLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let largest = arr[0];
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }
        else if (arr[i] > thirdLargest) {
            thirdLargest = arr[i];
        }
    }
    return [secondLargest, thirdLargest];



}

const [secondLargest, thirdLargest] = findSecondAndThirdLargest(arr);

console.log("Second Largest :", secondLargest);
console.log("thirdLargest :", thirdLargest);