function Pet(name) {
  this.name = name;
  this.hunger = 0;
  this.fitness = 20;
  this.age = 0;
  this.children = new Array;
}

Pet.prototype = {
 get isAlive() {
   
   return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    };
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  },

  walk() {
    const maxFitness = 20;
    this.fitness += 4;
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness >= maxFitness) {
      this.fitness = maxFitness;
    }
  },

  feed() {
    this.hunger -= 3;
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.hunger <= 0) {
      this.hunger = 0;
    }
  },

  checkUp() {
    
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness <= 3 && this.hunger < 5) {
      return "I need a walk";
    }
    if (this.fitness > 3 && this.hunger >= 5) {
      return "I am hungry";
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    }
    return "I feel great!";
  },

  adoptChild(child) {
    this.children.push(child);
  },

};

module.exports = Pet;