function loadResource(name, delay) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`${name} loadind in ${delay}ms`);
        }, delay);
    })
}

const resource1 = loadResource("Resource 1", 1000);
const resource2 = loadResource("Resource 2", 2000);
const resource3 = loadResource("Resource 3", 1500);

Promise.all([resource1, resource2, resource3])
.then(results => {
    console.log("🎉 All resources loaded ");
    results.forEach(res=> console.log(res));
})
.catch(err => {
    console.log("❌ One or the resource failed");
})