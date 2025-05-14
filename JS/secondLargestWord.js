function secondLargestWord(str) {
    let words = str.match(/\b\w+\b/g);

    let secondMax = ""
    let max = words.reduce((acc,curr) => {
        if(curr.length> acc.length){
            secondMax = acc;
            return curr;
        } else if( curr.length< acc.length && curr.length > secondMax.length ){
            secondMax = curr;
        }
        return acc;
    }, "")
    return secondMax;
}


console.log(secondLargestWord("I love building fullStack applications."))