import {Worker} from 'worker_threads';

function runWorker(input) {
    return new Promise((resolve,rejects) => {
        const worker = new Worker ('./worker.mjs', {
            workerData:input
        })

        worker.on('message',resolve);
        worker.on('error',rejects);
        worker.on('exit',code => {
            if(code !== 0) {
                rejects(new Error(`Worker stopped with Exit code ${code}`));
            }
        })
    })
}

runWorker(5).then(result => {
    console.log(`The double is: ${result}`)
}).catch(err => {
    console.error(err);
})