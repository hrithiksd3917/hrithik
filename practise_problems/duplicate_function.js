function findDuplicate(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;

}

const arr = [3, 10, 40, 2, 10, 5, 40, 6, 7, 7];

const checkDuplicate = findDuplicate(arr);
if (checkDuplicate.length > 0) {
    console.log("Duplicates found :", checkDuplicate);
}
else {
    console.log("No duplicates found");
}