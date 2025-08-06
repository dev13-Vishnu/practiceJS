for(let i = 1; i <=5; i++){
    const spaces = " ".repeat(5-i);
    let numbers = "";
    for(let j = 1; j <=i; j++){
        numbers += j;
    }
    console.log(spaces + numbers);
}