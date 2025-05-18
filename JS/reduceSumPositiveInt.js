const arr = [1, 2, 1, -5, 3, 4 ,]

const result = arr.reduce((acc,curr) => {
    if(curr > 0) {
        return acc +curr;
    } else {
        return acc;
    }
},0)

console.log(result);