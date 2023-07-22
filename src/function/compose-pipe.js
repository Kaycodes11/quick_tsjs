const add = x => x + 2;
const subtract = x => x - 1;
const multiplyBy5 = x => x * 5;
const divideBy2 = x => x / 2;

// it executes right to left so first add(4)
const result = multiplyBy5(subtract(add(4))); // this is not a compose fn
console.log(result);

// # now reduce method can help to make compose

// starts from right towards left 
const compose = (...fns) => value => fns.reduceRight((prev, fn) => fn(prev), value);

const compResult = compose(divideBy2, multiplyBy5, subtract, add)(4);


// starts from left towards right
const pipe = (...fns) => value => fns.reduce((prev, fn) => fn(prev), value);

const pipeResult = pipe(add, subtract, multiplyBy5, divideBy2)(4);
const pipeResult2 = pipe(add, subtract, multiplyBy5, x => x / 5)(4);


