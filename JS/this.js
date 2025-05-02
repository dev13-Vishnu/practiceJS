global.name = "Vishnu"; // In a browser: attaches to window.name

const person = {
  greet: () => {
    console.log(this.name); // ✅ Vishnu
  }
};

person.greet();
