function wait(ms) {
    return new Promise(resolve =>setTimeout(resolve,ms));
}

async function getData() {
    await wait(2000);
    return {
        id: 1,
        name: "Vishnu",
        email: "vishnu@example.com"
    }
}

(async()=> {
    console.log("Fetching User...");
    const user  = await getData();
    console.log("User receive:", user);
}) ();

// const user = getData();

// console.log(user);