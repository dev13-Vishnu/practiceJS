// function maxValue (arr) {
//     let max = Math.max(...arr);

//     console.log(max);
// }

// maxValue([1,2, 3, 5, 6])

function maxValue (arr) {

    let max = arr[0];
    for(let i =0; i< arr.length; i++) {
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3, 4, 5]))