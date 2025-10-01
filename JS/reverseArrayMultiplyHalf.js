let arr = [ 1, 2, 3, 4, 5];

let mid = Math.floor(arr.length/2);
arr.reverse()
for(let i = 0; i< arr.length; i++){
    arr[i] = i < mid ? arr[i] * 2: arr[i] * 5
}

console.log(arr);