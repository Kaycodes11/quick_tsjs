let object = {
  name: "John",
  city: "Boston",
  greet: function () {
    console.log(`${this.name} person is from ${this.city}`);
  }
}

let object2 = { name: "Jones" };

// never do it like this : here copying the properties/methods i.e. object's prototype to object2 so that object2 can he same properties/methods
object2.__proto__ = object;
console.log(object2["__proto__"]);
console.log(object2.name); // it has name property thus it'll be "Jones" not "John"
console.log(object2.greet()); // Jones is from Boston

// this is what called Prototypal inheritance


const person = {
  hobby: "Gaming"
};
console.log(Object.prototype === person.__proto__); // same
console.log(person.__proto__.toString() === person.toString()); // same

// every object has a prototype so person has its own prototype i.e. person.__proto__ & person.__proto__.__proto__ = this here refers to Object.prototype  then it will be null

// basically means person.prototype refers to person's properties/methods where person.__proto__ refers to its parent prototype

const musician = {
  plays: true
};

// console.log(person.hobby);
// console.log(musician.hobby);

// musician.__proto__ = person;

// use getPrototypeOf & setPrototypeOf methods rather than __proto__
Object.setPrototypeOf(musician, person); // first argument: who needs? 2nd argument: from whom?

console.log(Object.getPrototypeOf(musician));
// console.log(Object.getPrototypeOf(musician) === musician.__proto__);

const guitarist = {
  strings: 6,
  __proto__: musician
};
console.log(guitarist, guitarist.strings);
console.log(guitarist["hobby"], guitarist["plays"]);

// ---------------------------------------------------------------------------------------------------------

const vehicle = {
  seats: `silk`,
  doors: 4,
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  }
};

// prototypal inheritance
const luxuryVehicle = { model: "Ferrari" };
Object.setPrototypeOf(luxuryVehicle, vehicle);
luxuryVehicle.seatMaterial = "leather";

console.log(luxuryVehicle);
console.log(luxuryVehicle.doors);
console.log(vehicle);
console.log(luxuryVehicle); // luxuryVehicle.valueOf() same

// ---------------------------------------------------------------------------------------------------------

// constructor function
function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function() {
  return `A ${this.species} is walking`;
};

const Bear = new Animal("bear");

console.log(Bear.species);
console.log(Bear.walks());

// This prototype property is where inheritable props and methods are
console.log(Bear.__proto__);
console.log(Object.getPrototypeOf(Bear) === Bear.__proto__, Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);

// first, it'll look for within its properties then its own prototype i.e. o.__proto__ still not found o.__proto.__proto__ = Object's prototype
// o.__proto__ = own prototype ; o.__proto__.__proto = Object's prototype and o.__proto__.__proto.__proto__ = null

/*
o.__proto__
    {g: 1, f: 5}
    prototype : Object {
  __defineGetter__: function __defineGetter__()
  __defineSetter__: function __defineSetter__()
  lookupGetter__: function __lookupGetter__()
  lookupSetter__: function __lookupSetter__()
  proto__: Object {
    defineGetter__: function __defineGetter__()
    __defineSetter__: function __defineSetter__()
    __lookupGetter__: function __lookupGetter__()
    __lookupSetter__: function __lookupSetter__()
    __proto__: null
    constructor: function Object()
    hasOwnProperty: function hasOwnProperty()
    isPrototypeOf: function isPrototypeOf()
    propertyIsEnumerable: function propertyIsEnumerable()
    toLocaleString: function toLocaleString()
    toString: function toString()
    valueOf: function valueOf()
  <get __proto__()>: function __proto__()
  <set __proto__()>: function __proto__()
}
constructor: function Object()
hasOwnProperty: function hasOwnProperty()
isPrototypeOf: function isPrototypeOf()
propertyIsEnumerable: function propertyIsEnumerable()
toLocaleString: function toLocaleString()
toString: function toString()
valueOf: function valueOf()
<get __proto__()>: function __proto__()
<set __proto__()>: function __proto__()
}
*/

// ---------------------------------------------------------------------------------------------------------

const oo = {
  a: 1,
  b: 2,
  __proto__: { g: 10, f: 5 }
};
// oo = {a: 1, b: 2} and the value avaible from its prototype/__proto__ is = {g: 10, f: 5}
console.log(oo, oo["f"]);
console.log(oo.__proto__)

const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here as another object literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5
    }
  }
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o.d); // 5

const parent = {
  value: 2,
  method() {
    return this.value + 2;
  }
};

console.log(parent.method());

const child = {
  __proto__: parent
};
console.log(child.method(), child.value);
// child = {}
// child.__proto__ =  {
//   __proto: { value: 2, method: fn }
//   <prototype>: Object
// }

// now as known if value property exist within itself it will use that and won't look further so now this.value means child.value i.e. 10
child.value = 10;
console.log(child.method());

// child = { value : 10 }
// child.__proto__ =  {
//   __proto: { value: 2, method: fn }
//   <prototype>: Object
// }

// constructors
function Box(value) {
  this.value = value;
}

// so now any box made from Box constructor will have this "getValue method"
Box.prototype.getValue = function () {
  return this.value
}
const box1 = new Box(1);
const box2 = new Box(2)

// Box's value assigned to prototype of  box1, box2 then true else false
console.log(Box.prototype.isPrototypeOf(box1));
console.log(Box.prototype.isPrototypeOf(box2));


const boxes = [ new Box(1), new Box(2) ]
console.log(boxes);


console.log(Object.getPrototypeOf(new Box()) === Box.prototype);
console.log(box2.__proto__.constructor.prototype);


