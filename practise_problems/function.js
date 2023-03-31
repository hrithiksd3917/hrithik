// 1)

// const radius = [2, 3, 6, 7, 9];

// const calculate = function (radius) {
//     const output = [];
// for(let i =0 ;i<radius.length ; i++){
//     output.push(Math.PI* 2*radius[i]);
// }
// return output;

// };
// console.log(calculate(radius));


// 2)


// const area = function (radius) {
//     return Math.PI * radius * radius;

// };

// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;


// };
// console.log(calculate(radius, area));



// 3)



// const arr = [2, 3, 6, 7, 9];

// const output = arr.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr;
//     }
//     return max;


// }, 0);
// console.log(output);




const user =[
    {firstName :"Hrithik", lastName : "dalavi", age : 23},
    {firstName :"pranit", lastName : "dalavi", age : 21},
    {firstName :"sanket", lastName : "patil", age : 48},
    {firstName :"sammed", lastName : "bhasme", age : 57},
]

// const output = user.filter((x)=>x.age<30).map((x)=>x.firstName +" "+x.lastName);
// console.log(output);

const output = user.reduce(function(acc,curr){

    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;

},[]);
console.log(output);