function fetchData (callback) {
    console.log('Fetching data...')

    setTimeout(() => {
        const data = {id : 1, name: 'Vishnu', callsign: 'Ghost'}
        callback(data);
    }, 2000);
}

function handleData(data) {
    console.log('Recived Data:', data);
}

fetchData(handleData);