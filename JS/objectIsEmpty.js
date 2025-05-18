const scores = {
    Vishnu: 85,
    Arjun: 92,
    Priya: 78,
    Meena: 95
  };
  let isEmpty = Object.keys(scores).length === 0;
console.log(isEmpty);

let entries = Object.entries(scores);
let topScorer = Object.entries(scores).reduce((acc,curr) => {
    return curr[1]>acc[1]? curr: acc;
})[0]
let [name,score] = Object.entries(scores).reduce((acc,curr) => 
    curr[1]>acc[1]?curr:acc
)

console.log("entries:",entries);
console.log(topScorer)
console.log(name);