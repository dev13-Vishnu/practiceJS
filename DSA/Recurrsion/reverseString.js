function reverse(str){
    if(str ==="") return "";

    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("Ghost"));