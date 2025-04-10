function outer() {
    let count = 0;
  
    return function inner() {
      count++;
      console.log(count);
    }
  }
  
  const counter = outer(); // outer() finishes but its variables are "saved"
  counter(); // 1
  counter(); // 2
  console.log(outer())