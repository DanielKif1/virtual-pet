const Pet = require("./pet");



describe("constructor", () => {
  it("returns an object", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});
describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("increase hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toBe(5);
  });

  it("decrease fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toBe(17);
  });
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk", () => {
    const pet = new Pet("Fido");
    it("increase fitness should not past the maximum value", () => {
        pet.walk();
        expect(pet.fitness).toBe(20);
    });
    it("increase fitness to less than the maximum value", () => {
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toBe(8);
    });
    it("throws an error if the pet is not alive", () => {
      pet.age = 30;
      expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
    });
});
describe("feed", () => {
    const pet = new Pet("Fido");
    it("decrease hunger should not past the min value", () =>{
        pet.feed();
        expect(pet.hunger).toBe(0);
    });
    it("decrease hunger to more than the min value", () => {
        pet.hunger = 10;
        pet.feed();
        expect(pet.hunger).toBe(7);
    });
    it("throws an error if the pet is not alive", () => {
      pet.age = 30;
      expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
    });
});

describe("checkUp", () => {
    const pet = new Pet("Fido");
    it("check if the pet feels great and does not need a walk or feed", () => {
        expect(pet.checkUp()).toBe("I feel great!");
    });
    it("check if the pet need a walk and not a feed", () => {
        pet.fitness = 2;
        expect(pet.checkUp()).toBe("I need a walk");
    });

    it("check if the pet is hungry and does not need a walk", () => {
        pet.fitness = 20;
        pet.hunger = 6;
        expect(pet.checkUp()).toBe("I am hungry");
    });
    it("check if the pet need a walk and a feed", () => {
        pet.fitness = 1;
        pet.hunger = 8;
        expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    });
    it("throws an error if the pet is not alive", () => {
      pet.age = 30;
      expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
    });
});

describe("is alive", () => {
    const pet = new Pet("Fido");
    it("check if the pet is alive when its supose to be", () => {
        expect(pet.isAlive).toBe(true);
    });
    it("check if the pet is alive according to it's fitness", () => {
        pet.fitness = 0;
        expect(pet.isAlive).toBe(false)
    });
    it("check if the pet is alive according to it's hunger", () => {
        pet.fitness = 20;
        pet.hunger = 10;
      expect(pet.isAlive).toBe(false);
    });
    it("check if the pet is alive according to it's age", () => {
        pet.age = 30;
      expect(pet.isAlive).toBe(false);
    });
});