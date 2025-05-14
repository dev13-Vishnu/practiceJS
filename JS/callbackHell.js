function task1 (callback) {
    setTimeout(()=> {
        console.log("Task one compleate")
        callback();
    },100)
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 compleated.");
        callback();
    }, 1000)
}


function task3 (callback) {
    setTimeout(() => {
        console.log('Task 3 compleated.');
        callback();
    }, 1000)
}

task1(() => {
    task2(()=> {
        task3(() => {
            console.log('All tasks compleatd.')
        })
    })
})

//Promisify

function prmTask1 (){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('promise Task 1 compleatd');
            resolve();
        }, 1000)
    })
}

function prmTask2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('promise Task 2 compleated.');
            resolve()
        }, 1000);
    })
}

function prmTask3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('promise Task 3 compleated');
            resolve();
        }, 1000)
    })
}


prmTask1()
.then(() => prmTask2())
.then (() => prmTask3())
.then(() => {
    console.log('all Promise Task done.');
})
