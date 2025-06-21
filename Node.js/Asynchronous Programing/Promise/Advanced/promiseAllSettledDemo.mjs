function successTask(name, delay) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`${name} completed`), delay);
    });
  }
  
  function failTask(name, delay) {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`${name} failed`)), delay);
    });
  }
  
  const tasks = [
    successTask("🟢 Task 1", 1000),
    failTask("🔴 Task 2", 1500),
    successTask("🟢 Task 3", 500),
    failTask("🔴 Task 4", 2000)
  ];
  
  Promise.allSettled(tasks)
    .then(results => {
      results.forEach((result, index) => {
        console.log(`Task ${index + 1} Status: ${result.status}`);
        if (result.status === "fulfilled") {
          console.log(`   ✅ Value: ${result.value}`);
        } else {
          console.log(`   ❌ Reason: ${result.reason.message}`);
        }
      });
    });
  