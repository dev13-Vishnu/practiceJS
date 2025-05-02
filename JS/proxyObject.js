const target = {message : "hello"};

const handler = {
    get(target,prop) {
        return prop in target? target[prop] : "NOt found";
    }
}

const proxyObject = new Proxy(target,handler);

console.log(proxyObject.message);

console.log(proxyObject.name);

const user = {};

const handler1 = {
    set (target, prop, value) {
        if(prop === "age" && typeof value !== "number") {
            throw new TypeError("Age must be a number");

        }
        target[prop] = value;
        return true;
    }
};


const proxy = new Proxy(user,handler1);

proxy.age =29;
console.log(proxy.age);
proxy.name = "Vishnu";
console.log(proxy.name);
console.log("proxy:",proxy);
console.log("User:",user);

console.log("Proxy === user:" ,proxy == user)
proxy.age= "Twienty Nine"