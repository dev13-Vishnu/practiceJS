
function repeatTask(n, task) {
    console.log('Times :',n);

    for(let i = 1; i <= n; i++) {
        task(i);
    }
}

function sayHello(iteration) {
    console.log(`Hello ${iteration}`);
}

repeatTask(5, sayHello);