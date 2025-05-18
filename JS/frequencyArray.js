//[155,101,17711,100] - count the frequency of '1' in each elements


const arr = [155,101,17711,100]

const freq = arr.map(num => {
    return String(num).split('').filter(char=> char ==1).length;
})

console.log(freq);