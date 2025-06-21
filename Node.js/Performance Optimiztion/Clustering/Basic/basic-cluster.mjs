import cluster from 'cluster'
import os from 'os';

if(cluster.isPrimary) {
    console.log(`Maste ${process.pid} is running`);

    for (let i = 0; i < 4; i ++) {
        cluster .fork();
    }
    cluster.on('exit',(worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    console.log(`Worker ${process.pid} started`);
}