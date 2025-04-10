function isPalindrome(str, i = 0) {
    let j = str.length-1 -i;

    if(i >= j) return true;
    if(str[i] !== str[j]) {
        return false;
    }
    return isPalindrome(str,i+1);
}


console.log(isPalindrome("racecar"))
console.log(isPalindrome("many"));
