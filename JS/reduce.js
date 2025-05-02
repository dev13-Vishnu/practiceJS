// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((acc,curr) => {
//     return curr % 2 !== 0 ? acc + curr: acc;
// },0);

// console.log("Sum:",sum);

// // let filtered = []
// let filter = arr.reduce((acc,curr)=> {
//     if(curr %2 !==0) {
//         acc.push(curr);
//     }
//     return acc;
// },[])

// console.log(filter);

// let arr = [1, 2, 3, 4, 1, 5, 3, 2];

// let map = arr. reduce((acc,curr) => {
//     if(acc[curr]) {
//         acc[curr] ++;
//     }else{
//     acc[curr] =1;}
//     return acc;
// },{})

// console.log(map);

// let countOfthree = map[3]

// console.log("count:",countOfthree);
// 1. Find the Product of All Even Numbers
// Given an array of numbers, use reduce to find the product of all even numbers.
// 💡 Hint: Use an accumulator initialized to 1.
let evenProdArray = [1, 2, 3, 4, 5, 6];
let product = evenProdArray. reduce((acc,curr) => {

    return      curr % 2 === 0? acc* curr : acc
    // if(curr % 2 === 0){
    //     return acc * curr;
    // }else {
    // return  acc
    // }
    //  acc;
})
console.log ("Product of all even numbers in an array:",product);
// 2. Count the Occurrences of Each Element
// Given an array, use reduce to count how many times each element appears.

let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let


