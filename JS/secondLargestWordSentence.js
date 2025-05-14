function secondLongest(sentence) {
    let longest = "";
    let secondLongest = "";
    let words = sentence.match(/\b\w+\b/g);
    for (let word  of words) {
        if(word.length > longest.length){
            secondLongest = longest;
            longest = word;
        } else if(word.length < longest.length && word.legnth> secondLongest.length){
            secondLongest = word;
        }
    }
    console.log(secondLongest);
}


secondLongest("I love building fullstack applications.");
