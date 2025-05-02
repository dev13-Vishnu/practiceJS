import {fork} from 'child_process';

const child = fork('./child.mjs');

child.send({number:10});

child.on('message',(msg) => {
    console.log("Result from child:",msg.result)
})