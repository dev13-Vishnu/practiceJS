function getNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            const num = Math.floor(Math.random()*10);
            resolve(num);
        }, 1000);
    })
}


async function addTwoNumbers() {
    const num1 = await getNumber();
    const num2 = await getNumber();

    const sum = num1 + num2;

    console.log("First number:",num1);
    console.log("Second Number:", num2);
    console.log("Sum:", sum);
}


addTwoNumbers();