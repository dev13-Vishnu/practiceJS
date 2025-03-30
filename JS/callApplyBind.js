function greet(greeting){
    console.log(`${greeting}, ${this.name}`)
}

const person = {
    name: "Aravind",

}

const greetAra = greet.bind(person,"Hello");

greetAra();