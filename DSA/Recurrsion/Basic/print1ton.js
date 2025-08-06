
function print1toN(n ,i=1) {
    if(i >n) return ;
    console.log(i);
    i++;
    print1toN(n,i);
}

print1toN(9)