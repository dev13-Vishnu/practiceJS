function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  
  const evens = myFilter(numbers, function(num) {
    return num % 2 === 0;
  });
  
  console.log(evens); // [2, 4, 6]
  