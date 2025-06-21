//Original function returning Promise
function getData() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve('✅ Data Loaded');
        }, 1000);
    })
}

getData()
.then(data => console.log(data));
//handling the promise using async/awiat
async function fetchData() {
    try{
        const data =  await getData();
        console.log(data);
    }
    catch(err) {
        console.log(err.message);
    }
}

fetchData();