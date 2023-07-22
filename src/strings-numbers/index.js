let value = "Hi JavaScript";
let value2 = "Hello React";

console.log(value[1]);

console.log(Array.from(value))
console.log([...value2])

// match() returns an array or null whereas search() returns index or -1
let text = "the rain in spain stays mainly in the plain";
console.log(text.match('ain'));
console.log(text.match(/ain/));
console.log(text.match(/goku/gi));
console.log(text.matchAll('ain')); // same as to /ain/g
for (const s of [...text.matchAll('ain')]) {
    console.log(s[0], s["index"])
}

console.log(text.search('Goku'));

const j = "Hello Java developer, learning java?";
const g = j.replace(/java/i, "JavaScript");
g1 = j.replace(/java/gi, "JavaScript"); // value.replaceAll("java", "javascript");
console.log(g)
console.log(g1)

// ----------------------------------------------------------------------------------------------------

console.log(value.charAt(6));
console.log(value.charCodeAt(6));
console.log(value.concat(" " + value2));
console.log(value.endsWith("t"));
console.log(value.startsWith("h"));
console.log(String.fromCharCode(114));
console.log(value.includes("t"));
console.log(value.indexOf("i"));
console.log(value.lastIndexOf("i"));
console.log(value.repeat(2));
console.log(value.replace(/hi/gi, "Greetings")); // immutable
console.log(value.search("i"));

// ----------------------------------------------------------------------------------------------------

console.log(value.split()); // immutable
console.log(value.split(""));
console.log(value.split(" "));

console.log(value2.slice(1));
console.log(value2.slice(-1));
console.log(value2.slice(1));
console.log(value2.slice(0, -6));
console.log("  trimming  ".trim());

console.log(value2.substring(0, 1)); // immutable
console.log(value2.substring(1, 5));

// ----------------------------------------------------------------------------------------------------

console.log(1 + "2");
console.log(1 - "22");
console.log("20" * "100");
console.log("100" / "100");
console.log(typeof NaN);
console.log(NaN + 1, NaN - 1, NaN / 1, NaN * 1);
console.log(undefined + 1, undefined - 1, undefined * 1, undefined / 2);

// # number

let n = 10.118212;
console.log(n.toFixed(), n.toFixed(2));
console.log(isNaN(n), Number.isInteger(n));
console.log(parseFloat(n));
console.log(parseInt(n));
console.log(n.toPrecision(n));
n = 1024;

console.log(n.toExponential());

// ----------------------------------------------------------------------------------------------------