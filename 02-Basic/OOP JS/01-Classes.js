class Animal {
	constructor(name, legCount, color ){
		this.name = name;
		this.legCount = legCount;
		this.color = color;
	}

	describe(){
		return `${this.name} is ${this.color} in color and it has ${this.legCount} legs.`
	}
}

let animal01 = new Animal();
animal01()
describe(animal01) 