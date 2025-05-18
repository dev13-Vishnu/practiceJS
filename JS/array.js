let input = [10, 20, 30, 40, 50];

// Remove the element at index 2
const [removed] = input.splice(2, 1);

// Add it to the beginning
input.unshift(removed);

console.log(input); // [30, 10, 20, 40, 50]
