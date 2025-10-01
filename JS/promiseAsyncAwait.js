function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let success = true;
            if(success) {
                resolve("Data fetched successfully.");
            } else {
                reject("Error fetchind data");
            }
        }, 1000);
    });
}

// fetchData()
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => console.log(err.message));

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData();