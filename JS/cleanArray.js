let arr = [1, null, 2, undefined, 3, 4, null];

let cleanArr = arr.filter((element => element != null));
// let cleanArr = arr.filter((element => element !== null && element !== undefined));

console.log(cleanArr);