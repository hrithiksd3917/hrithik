
// const arr =[1,2,3,4,5];

// const output = arr.filter(isOdd);

// function isOdd(x){
//     return x % 2 !==0;
// }
// console.log(output);



// /*
// arrow function 

// const arr =[1,2,3,4,5];
// const output = arr.filter((x)=> x % 2 !==0);

// console.log(output);
// */




let team = [
    {
        name: "hrithik",
        position: "developer"
    },
    {
        name: "pranit",
        position: "ui designer"
    }, {
        name: "sanket",
        position: "backend developer"
    }, {
        name: "sammed",
        position: "ceo"
    }, {
        name: "shubham",
        position: "developer"
    },
]

let developer = team.filter(val=>val.position == "developer");

console.log(developer);