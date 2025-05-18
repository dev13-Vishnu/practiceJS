// function runLater(callback, delay) {
//     setTimeout(callback, delay);
// }

// runLater(() => console.log("Delayed!"),1000);


// function delayWrapper(func, delay) {
//     return function() {
//         setTimeout(func, delay);
//     };
// };

// const sayHI = () => console.log("Hi!");

// const delayedHi =  delayWrapper(sayHI, 2000);
// delayedHi();

// function delayedWrapper(func,delay) {
//     return function(...args){
//         setTimeout(() =>func.apply(this,args), delay);
//     };
// }

// const greet = (name) => console.log(`Hello, ${name}`,this);
// const deleayedGreet = delayedWrapper(greet,2000);
// deleayedGreet("Vishnu");

// function debounce( func, delay) {
//     let timeoutId;
//     return function(...arg){
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => func.apply(this,arg),delay)
//     }
// }

// function searchQueray(q) {
//     console.log(`Searching for ${q}`);
// }

// const debounceSearch = debounce(searchQueray, 1000);

// debounceSearch("v");
// debounceSearch("Vi");
// debounceSearch("Vis");

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      console.log("debounced wrapper -> this:", this);
      console.log("Args:",...args);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log("inside setTimeout -> this:", this);
        func.apply(this, args); // try removing .apply to see changes
      }, delay);
    };
  }
  
  const user = {
    name: "Vishnu",
    greet() {
      console.log("Inside greet -> this:", this);
    }
  };
  
  user.debouncedGreet = debounce(user.greet, 1000);
  user.debouncedGreet(); // Watch what "this" is in each log
  