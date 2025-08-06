console.log('using proces.stdout.write()');
for(let i = 1; i <=5; i++) {
    for(j = 1; j<= i; j++) {
        process.stdout.write(j.toString());
    }
    console.log("");
}
console.log('by converting into string each line');
for(let i = 1; i<= 5; i ++) {
    let line = "";
    for(let j = 1; j <=i; j++) {
        line += j;
    }
    console.log(line);
}
console.log('using Array.from() and .join()');
for(let i = 1; i <= 5; i ++) {
    const line = Array.from({length: i},(_,index) => index + 1).join("");
    console.log(line);
}
console.log('using while loop');
let i = 1; 
while(i<=5) {
    let j = 1;
    let line = "";
    while(j <= i) {
        line +=j;
        j++;
    }
    console.log(line);
    i++
}