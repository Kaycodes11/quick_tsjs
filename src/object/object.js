const obj1 = {
  languages: ['JS'],
  defColor: "blue",
  defMake: "Toyota",
  count: 0,

  // same name must be used for getter and setter but properties name should be different
  get countNumber() {
    return this.count;
  },

  set countNumber(value) {
    this.count += value;
  },

  get make() {
    return this.defMake;
  }
};

// add a new property or properties to an existing object here e.g. obj1
Object.defineProperty(obj1, "color", {
  get: function() {
    return this.defColor;
  },
  set: function(color) {
    this.defColor = color;
  }
});

obj1.color = "yellowGreen";
console.log(obj1.countNumber, obj1.defColor);

const obj2 = Object.defineProperties({  }, {
  "hobby": {
    value: "gaming",
    writable: true
  },
  "languages": {
    value: 'React',
    writable: false
  }
});

console.log(obj2.hobby, obj2.languages);


const list = [1, 2];
console.log(list.prototype); // undefined

class Game {
  id = 1;
  isDigital = true
}

console.log(Game.prototype); // { constructor: f }

function name () {
  console.log("logged");
}
console.log(name.prototype); // { constructor: f }
console.log(name.prototype.constructor); // f name () {console.log('hello')}

// only normal function i.e. name, constructor function i.e Person & class i.e Game has prototype property
// Function.prototype = f () {[native code]}; Object.prototype i.e. {constructor: f, __defineGetter__: f} 

function someFn() {
  return 2;
}

// someFn.__proto = f () {[native code]} thus someFn.__proto__ === Function.prototype is true
// someFn.__proto.__proto__ = Object.prototype i.e. {constructor: f, __defineGetter__: f} 
// now, // someFn.__proto.__proto__.__proto__ = null
// same for the constructor function e.g. Person or class i.e. Game

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  }
}

function Person(name) {
  this.name = name;
}

// assigned personPrototype as value to Person's prototype 
Person.prototype = personPrototype;
console.log(Person.prototype); // {greet: f}

// as for the constructor function, it will be function [this is how to overwrite/reassign the constructor]
Person.prototype.constructor = Person; // constructor's value must be a function / method

const person_ = new Person("Goku");
console.log(person_.greet(), person_['name'], person_.constructor);



const person = {
  greet() {
    return `hello`
  }
}

const john = Object.create(person);
console.log(john.greet());

// ---------------------------------------------------------------------------------------------------------

// cloning [copying data from within source to target] : prioritizes the right side latest value

console.log(Object.assign({  }, { a: 1, b: 2 })); // { a: 1, b: 2 }
console.log(Object.assign({a: 1, b: 2}, {a: -1, b: 1} )); // { a: -1, b: 1 }


// copying the symbol-typed properties
const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj, Object.getOwnPropertySymbols(obj));

// accessors
let map = {
  foo: 1,
  get bar() {
    return this.foo;
  }
};

let copy = Object.assign({}, map);
console.log(copy); // { foo: '1', bar: 2 }

// Object.assign manual implementation
function assigned(target, ...sources) {
  console.log(sources); // [{foo: 1}]
  sources.forEach(source => {
    // source = {foo: 1, bar: 1} => Object.keys["foo", "bar"]
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // By default, Object.assign copies enumerable Symbols, too
    if(Object.getOwnPropertySymbols(source).length) {
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      console.log("descriptor: ", descriptor);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    })
  };

    Object.defineProperties(target, descriptors);
  });
  return target;
}

const here = Object.getOwnPropertyDescriptor({ id: 1 }, "id");
console.log(Object.defineProperties({}, { id: here }));

copy = assigned({}, map);
console.log(copy); // { foo:1, get bar() { return 2 } }

const blank = {};

Object.getOwnPropertySymbols(map).forEach(sym => {
  // get the specific property description with its value
  let descriptor = Object.getOwnPropertyDescriptor(obj, sym);
  if(descriptor.enumerable) {
    blank[sym] = descriptor;
  }
})


// immutability = https://www.youtube.com/results?search_query=object.seal+vs+object.freeze

// Object.seal() method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.

const object1 = {id: "1"}
Object.seal(object1)
console.log(Object.isSealed(object1))
object1.id = "2"
console.log(object1.id); // "2"

object1.title = "FIFA"; // not allowed to add new property since sealed

delete object1.id; // can't delete since sealed
console.log(object1.id); // "2"


// The Object.freeze() method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
const object2 = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33; // Throws an error in strict mode

console.log(obj.prop);
// expected output: 42


// The Object.preventExtensions() method prevents new properties from ever being added to an object 
// It also prevents the object's prototype from being re-assigned.

const object_ = {};

Object.preventExtensions(object_);

try {
  Object.defineProperty(object_, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}
