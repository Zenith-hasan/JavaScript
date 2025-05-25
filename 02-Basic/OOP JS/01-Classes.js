class Animal {
  constructor(name, legCount, color) {
    this.name = name;
    this.legCount = legCount;
    this.color = color;
  }

  describe() {
    return `${this.name} is ${this.color} in color and it has ${this.legCount} legs.`;
  }

  // static method
  static hello() {
    console.log(`Thanks for Visiting Our Zoo :)`);
  }
}

let animal01 = new Animal("Zebra", "white-black", "4");

console.log(animal01.describe());
Animal.hello();
