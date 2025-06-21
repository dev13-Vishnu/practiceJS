function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function greet(name) {
    await(delay(1000));
    console.log(`Hello ${name}`)
}

greet("Ghost");