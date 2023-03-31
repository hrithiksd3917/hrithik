function findMissing(arr) {

    let n = arr.length + 1;
    let getSum = (n * (n + 1)) / 2;
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        arraySum +=arr[i];

    }
    return getSum-arraySum;

}

const arr = [1, 2, 4, 5, 6];

const missingNum = findMissing(arr);
console.log("Missing number :" ,missingNum);