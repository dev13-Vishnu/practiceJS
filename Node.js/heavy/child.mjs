process.on('message',(msg) => {
    const result = msg.number * 2;

    process.send({result})
})