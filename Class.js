class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`HI i am ${this.name} and i amaa a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
}

const Wizard1 = new Wizard("Riyad", "Gamer");
const Wizard2 = new Wizard("Rahad", "GFX DESIGNER");

console.log(Wizard1.introduce());
console.log(Wizard2.introduce());
