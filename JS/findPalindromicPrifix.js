function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function findPalindromicPrefix(str){
    for(let i = str.length; i>0; i--){
        const prefix = str.substring(0,i);
        if(isPalindrome(prefix)){
            return prefix;
        }

    }
    return '';
}

console.log(findPalindromicPrefix("levelup"));      // Output: "level"
console.log(findPalindromicPrefix("abacdf"));       // Output: "aba"
console.log(findPalindromicPrefix("abcde"));        // Output: "a"
console.log(findPalindromicPrefix("12321hello"));   // Output: "12321"