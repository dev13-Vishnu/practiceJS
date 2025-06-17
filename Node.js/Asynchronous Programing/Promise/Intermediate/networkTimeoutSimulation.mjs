function timeoutPromise (ms) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`⏰ Timeout after ${ms} ms`));
        }, ms);
    })
}

function fakeNetworkCall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("✅ Data fetched from server");
      }, 3000); // simulates a slow 3s response
    });
  }
  
  // Set timeout limit
  Promise.race([
    fakeNetworkCall(),
    timeoutPromise(2000) // 2s timeout
  ])
    .then(data => console.log(data))
    .catch(err => console.error("❌ Error:", err.message));
  