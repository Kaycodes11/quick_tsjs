// make an array to 2d array
console.log(JSON.stringify(Object.entries([1, 2])));

// take the 2d array and make an object from it
console.log(Object.fromEntries(Object.entries([1, 2])));


// Set: doesn't contain duplicate value
function* gen() {
  yield  1;
}

const s = [1, 2];
const mySet = new Set([s, ...gen()]);
console.log(mySet);
console.log(mySet.has("greeting"));
console.log(mySet.values());
console.log(mySet.keys());
console.log(mySet["size"]);
mySet.add(5).add(`some text`).add({ title: "React" }).add({ title: "Node" });

console.log("mySet", mySet);
// mySet.clear();

// since Set is iterable so to get every element from it within an array just spread or Array.from
// console.log(Array.from(mySet));
console.log([...mySet]);

// make a 2d array from an array by using Object.entries
console.log(JSON.stringify(Object.entries([...mySet])));

// to make a key - value pair from out use Object.fromEntries
console.log(Object.fromEntries(Object.entries([...mySet])));
console.log(Object.fromEntries([["id", "1"]]));

for (const s of mySet.keys()) {
  console.log(s);
}

mySet.forEach((item, _) => {
  console.log(item);
});

// WeakSet only stores objects and its non-iterable
const ws = new WeakSet();
console.log(ws);
const foo = { id: 1 };
const bar = {};

ws.add(foo);
ws.add(bar);

console.log(ws.has(foo), ws.has({}));
ws.delete(bar);

console.log(ws);


// # Map : takes a 2d array and return an iterable object

// The simplest way to make a 2d array from array by using Object.entries
console.log(Object.entries([1, 2]));

const map = new Map(Object.entries([...mySet] )); // takes a 2d array
console.log(map);
console.log(map["size"]);
console.log(map["values"]);
console.log(map.get("0"), map.get("2"));

// for (const m of map) {
//   console.log(m);
// }

for (let [key, value] of map) {
  console.log(`${key}->${value}`);
}


map.forEach((key, value) => {
  console.log(`${key}->${value}`);
});

// # WeakMap : keys must be object and it's more efficient with garbage collection and its non-iterable
const wm1 = new WeakMap(), wm2 = new WeakMap();
const o1 = {}, o2 = function() {
};

// must use an object as key
wm1.set(o1, 11);
wm1.set(o2, `iterative`);
wm2.set(o1, o2);
wm2.set(o1, undefined);
wm2.set(wm1, wm2);

console.log(wm1.get(o1));
console.log(wm1.get(o2));
console.log(wm1.get(wm1));
console.log(wm1.has(o2));
console.log(wm1.has(o1));



john = null; // now john has removed from memory
