function loadData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const fakeData = {
                userId : 1, 
                username: "vishnu_ps",
                email: "vishnu@example.com"
            };
            resolve(fakeData);
        }, 2000);
    })
}

loadData().then(data=> console.log("Data loaded:", data))
.catch(err=> console.error("Error loading data:", err));