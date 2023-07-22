// class, getter, setter, modifiers, inheritance, encapsulation, polymorphism, abstraction
// https://medium.com/nerd-for-tech/understanding-javascript-es6-classes-dbce09c0b903

class Movies {
  #title = `Good movies`;
  rating = "good";
  leads = new Map();
  isSubscribale = true;

  constructor (rating) {
    this.rating = rating;
  }

  set movieTitle(title) {
    this.#title = title;
  }

  static movieTitle() {
    return this.#title;
  }

}

const movies = new Movies();
movies.movieTitle = "Great Movie";

class Genre extends Movies {
  #earning = "unknown";
  constructor(rating = "nice", earning) {
    // super method here calls the parent constructor function, so if parent constructor function has argument
    // then must provide here either hard-code or via subclass constructor's parameter
    super(rating); 
    this.earning = earning;
  }
}

// # functional inheritance e.g. https://rajeshnaroth.medium.com/javascript-inheritance-without-es6-classes-6ff546c0d58b

const getAnimal = (name) => {
  let properties = { name: name };
  return ({
    get name() { return properties.name },
    set name(newName) { properties.name = newName },
    breathe: () => console.log(`${name} Huffs`)
  })
}

const getAmphibian = (name) => {
  const animal = getAnimal(name);
  animal.swim =  () => console.log(`${animal.name} swims`);
  return animal;
}

const kermit = getAmphibian("Kermit");
kermit.swim();
kermit.breathe();

const Animal = (name) => {
  let properties = { name };
  return ({
    get name() { return properties.name },
    set name(newName) { properties.name = newName },
    breathe: () => console.log(`${name} Huffs`)
  })
}

const aquaticKind = (animal) => ({
  swim: () => console.log(`${animal.name} swims`)
})
const walkingKind = (animal, noOfLegs) => {
  const properties = { noOfLegs }
  return ({
    get noOfLegs() { return properties.noOfLegs },
    set noOfLegs(n) { properties.noOfLegs = n; },
    walk: () => console.log(`${animal.name} walks with ${properties.noOfLegs} legs`)
  })
}
const eggLayingKind = (animal) => ({
  layEgg: () => console.log(`${animal.name} laid an egg`)
})

const Crocodile = (name) => {
  const animal = Animal(name);
  return Object.assign(animal, walkingKind(animal, 4), aquaticKind(animal), eggLayingKind(animal));
}

const Ape = (name) => {
  const animal = Animal(name);
  return Object.assign(animal, walkingKind(animal, 2));
}
const ape = Ape('Caesar');
ape.walk();

const Platypus = (name) => {
  const animal = Animal(name);
  return Object.assign(animal,eggLayingKind(animal, 4),aquaticKind(animal));
}
const platypus = Platypus('Platypus');
platypus.swim();
platypus.layEgg();