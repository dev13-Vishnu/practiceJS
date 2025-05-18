const arr = [1, 2, 1, -5, 3, 4 ,]

const min = Math.min(...arr);

const index = arr.indexOf(min);

if(index !== -1) {
    arr.splice(index,1);
}

console.log(arr);