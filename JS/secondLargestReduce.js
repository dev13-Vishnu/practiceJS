function secondLargest (arr) {
    let secondMax = -Infinity;

    let max = arr.reduce ((acc, curr)=> {
        if(curr> acc) {
            secondMax = acc;
            return curr;
        } else if( curr < acc && curr > secondMax){
            secondMax = curr
        }
        return acc;
    } , -Infinity)
    return secondMax;
}

console.log(secondLargest([5, 2, 9, 3, 9, 7])); // ➜ 7
