let input = "How are you";

let words = input.split(' ');

const reversed = words.map(word =>word.split('').reverse().join(''));

console.log(reversed.join(' '));