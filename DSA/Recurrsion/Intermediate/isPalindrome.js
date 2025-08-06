function isPalidrome(str,left=0, right=str.length-1){
    if(left>=right) return true;
    if(str[left] !== str[right]) return false;

    return isPalidrome(str,left+1, right-1)
}

console.log(isPalidrome("racecar"));
console.log(isPalidrome("palidrome"));