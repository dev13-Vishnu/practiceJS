const preson  = {
    name: "Vishnu",
    age: 29,
}

const handler = {
    get(target, property) {
        console.log(`Accessed Propert: ${property}`);
        return target[property];
    }
}

const proxyPerson = new Proxy(preson,handler);

console.log(proxyPerson)

console.log(proxyPerson.name);