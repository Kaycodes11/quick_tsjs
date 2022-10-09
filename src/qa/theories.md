# how the javascript works?

Everything in JS happens inside an Execution Context.

The execution context consist of 2 things:

1. Memory Component also known as Variable Environment - This is where the variables and their values are stored as key:value pairs, this also stores the functions

2. Code Component also known as Thread of Execution - This is where the code is run 1 line at a time.

JavaScript is a synchronous single-threaded language which means it can only run 1 line of code at a time, and it cannot move to another line until the first one is done executing.

# How JavaScript code is executed and call stack?

var title = "fifa";
function square (num) {return num \* num }
var square2 = square(2)
var square4 = square(4)

Memory/variable | code/thread of execution
title: undefined  
square: (){}  
square2: undefined
square4: undefined

Memory/variable | code/thread of execution
title: "Fifa"  
square: (){} already stored in memory  
square2: undefined | as function invoked; it makes its own new function execution context & since it's an execution context it'll have those two components to allocate memory with a special default value if used var delcaration i.e. `undefined` and then when running code line by line as it gets the actual value then simply update that to its memory location.
square4: undefined

after the function's execution done and value saved to required place its own function execution context gets automatically deleted

1. When JavaScript code is executed, Execution Context is created, and it
   is called Global Execution Context.

2. JavaScript program is executed in TWO PHASES inside Execution Context
   a. MEMORY ALLOCATION PHASE - JavaScript program goes throughout the program and allocate memory of Variables and Functions declared in program.
   b. CODE EXECUTION PHASE - JavaScript program now goes throughout the code line by line and execute the code.

3. A Function is invoked when it is called, and it acts as another MINI PROGRAM and creates its own Execution Context.

4. Returns keyword return the Control back to the PREVIOUS Execution-Context where the Function is called and Execution Context of the Function is DELETED.

5. CALL STACK maintains the ORDER of execution Contexts. It CREATES Execution Context whenever a Program starts or a Function is invoked and it pops out the Execution Context when a Function or Program ENDS.

## Stack

function a () {
console.log(2)
}
var result = a()
Now, as it's defined on Global scope; for this memory will be allocated on GEC;

next, when that function invoked, it creates a new stack/function execution context on top with same two components to allocate memory
from function's parameter (if any) and its local variable environment & then run code line by line

Function can have multiple nested function nested within or vice-versa, so
it would create function execution context within function execution context but JS manages that gracefully with a call stack

at the button of stack, it has Global execution context that means whenever
any JS program is run , this call stack is populated with this GEC and then
when a function invoked it pushes a new stack onto and within that it has its own function execution context and rest are the same and again after then execution is done and control return from where its invoked it gets popped off from stack and garbage collected

# Hoisting

function declaration: it stores the whole function itself to a key thus
when called before it can get the expected output, to verify simply use a breakpoint and look at global scope to understand better

console.log(x); // undefined
var x = 5;
getName()

function getName() {
console.log("JavaScript great");
}

console.log(x); // 5

console.log(getName2());// undefined [it's treated as variable declaration]
note that calling getName() i.e. undefined() will throw a TypeError "getName2 is not a function" which totally makes sense

var getName2 = () => console.log('JS');

<!-- but after initializing this should be a valid fn -->

console.log(getName2)

## how function usually works and its local variable environment

## window & this keyword

window is a global object and `this` is made alongside GEC/FEC whenever any JavaScript program runs on the browser and `this` points to window and when JS used in an integrated environment like node window refers a global object

whenever any global variable detected, that's available like window.a;

var a = 10;

function b () {
console.log(window.a, this.a);
}

# undefined: variable declared but not value provided, not defined: variable is not defined whatsoever

## scope chain, lexical environment

when within the function looking for a variable or such, it will look
within its own parameter, local variable environment then the global scope

function a () {
console.log(b);
}

var b = 10;
a(); // will log b's value as 10

function a1 () {
var b = 10;
inner();
function inner () {
console.log(b);
};
}

a1()
console.log(b); // ReferenceError; b is not defined

scope: it's about where the variable defined and based on that what kind of scope it has access to

what is scope of variable b?

lexical: where the code is physically present?

lexical environment: whenever an execution is made, a lexical environment is also created, lexical environment is local memory along with the lexical environment of its parent.

here inner fn is physically present with a1 meaning inner fn is lexically within a1 and a1 is lexically within global scope

## var vs let vs const, ReferenceError, TypeError & SyntaxError

window i.e global object

var : hoisted, value attached global object, re-declarable within same scope, function-scoped,

var a = 1;
var a = 2;

her var declaration first assign 1 to a memory location then when redeclared
it uses `the same memory location' to update the value to 2;

let : hosted, but value not attached to global object, can't be re-declared within same scope, block-scoped, not necessary to initialize/passing a value;

const : hosted, but value not attached to global object, same variable can't be re-declared within same scope, block-scoped, necessary to initialize/passing a value

with var the during the memory allocation that variable available on global
scope (attached to the window)

but even though let const variable has also allocated memory with `undefined` value, but it is stored at some other place not within window this accessing before its value initialized will throw `ReferenceError`

var a = 10;
let b = 11;

temporal dede zone: the time between let/const variable hoisted till it has initialized with a value and the value from the palce can't be accessed until it has initialized/assigned a value.

## block and block scope, shadowing

Q) What is block in JavaScript?

> multiple js statements formed in a group enclosed within brackets, and it forms a block

Q) What is block scope in JavaScript?

> what are the variable that can be accessed from within this very block and the scope of the block is simply what are accessible within this block

Q) What is need of a block/Grouping?

> JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block

When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment'

This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' i.e. ' Variable in Global environment' and other are not!

so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'

## closure

Q)What is closure?
A)The function bundled with its lexical environment closed to that function
simply function + Lexical environment and closures have very special place in runtime environment or
the function along with its lexical scope bundled together forms a closure

basically when inner function is returned , that not just return the function also the closure

function outer () {
var x = 7;
return function inner () {
console.log(x)
}

<!-- return inner; -->

}

var z = outer(); { inner: function () {}, closure: `its parent lexical environment` }
console.log(z)
z()

The fun in JavaScript is you can assign a variable for a function, & also you can pass function as a parameter even you can return the function in JavaScript!!

Q)What does the closure do in my JavaScript programs?
A) Whenever I call a function in JavaScript the closure maintains its values(lexical env.) and function in its own runtime and when that specific function executed, it returns with own environment even the variable vanished after its execution

In closures, values in variable are 'pass by reference' hence there values can be changed, and whenever comes the closure inside closure(multilevel one) we can see the function refers the 'parent' variable

## setTimeout(clearTimeout) + setInterval(clearInterval) with closure

## function is first class citizen with anonymous function

# function statement / function declaration

function x () {
console.log(`function statement`)
}
x()

# function expression

var b = function () {console.log(`b called`)}

Anonymous function: function without a name

## what is callback function?

when function is passed as value to another function's invocation

setTimeout(function () {console.log('timer')}, delay)

function x (y) {
console.log('x')
y()
}

x(function y () {console.log('y')})

function attachEventListeners () {
let count = 0;
document.getElementById('clickMe').addEventListener('click', function xy () {
console.log('button clicked', ++count);
})
}

## event loop : callback microtask queue

Whenever any JS program run, GEC created then it pushed within call stack
then when no code to run GEC also get popped off from the stack.

web apis:
setTimeout/setInterval,
dom apis
fetch()
localStorage
console
location

how addEventListener works behind the scene?
console.log('start');

document.getElementById("button").addEventListener('click, function cb () {
console.log('callback function');
} )

console.log('end');

explain:

so as run this lines of code; JS engines creates GEC and pushed to call
stack then register the callback function with click attached then move to
the next line log 'end' and its does and GEC popped off from call stack
while register callback still siting within web api environment

now when user click on the button with "button" id the register callback
function that was sitting within `webapi environment` goes to `callback queue` and wait there while event loop checks whether if call stack is empty and so when call stack empty the function gets puhsed to stack and then function gets executed line by line and when done popped off.

-- why callback queue or task queue is needed?
JS engine has one call stack, and it does one thing at a time, so if user
frequently click multiple times the stack could get filled multiple cb
functions but with `callback queue` it does one at a time one by one to stack.

fetch('https://api.netflix.com').then(function getNetflix (data) {})
similarly, when called it goes web api environment and doesn't block the
main thread of execution so when it gets the data from server then it's
registered cb fn `getNetflix` comes to `callback queue` then `event loop`
checks the call stack if its empty it pushes the function to the stack.

-- Microtask queue: network calls goes here i.e. Promise values
This queue has higher priority so whatever comes within these queue,
gets pushed first to call stack than `callback queue`

## js engine: interpreter, compiler

JS engine is nothing but a piece of code that's written with c++, that takes high level code we write and compile to "bytecode / machine-level" code.

JS engine takes the code & do the following things::

i) parsing : here the code broken down to token, then "syntax parser" generates ast refer to ast-explorer.net, now this generated "ast" goes to the compilation 

ii) compilation - execution: both goes hand in hand

interpreter: an interpreter reads code like from the first then executes that then goes to next line and follows.

pros: initially fast
cons: bundle/executable size is bigger

compiler: the compiler compiles the whole code first & spits out the optimized version of the code then execute.

pros: the code is optimized and bundle/executable size is fewer
cons: the initial compilation is time-consuming

# JIT compilation
JS uses both interpreter & compiler both known as "JIT compiler" to execute the code. So, after getting the "AST", it goes to interpretter then interpretter takes that relatively "high-level" code and turn it to "bytecode" and then "bytecode" move to "execution" step. But while it's executing the code it takes help from 
"compiler" to optimize the code, so basically while interpreter reading code line by line the compiler tries
to optimize the code as much as it can. So, the job of the compiler here is to simply optimize the code at runtime as much as possible thus known as JIT (JUST IN TIME) compilation.

# AOT compilation
some JS engine has AOT (Ahead of time) compilation which basically takes a piece of code that's going to be executed
later, tries to optimize as much as it can & generates bytecode which is what goes to execution thereafter.


iii) Execution

Here, it has memory heap and call stack, heap is where memory stored alongside garbage collector.

now to execute the received "bytecode" it will use call stack which is within JS engine

## higher order function

A function that takes function as argument or return a function is "higher order function"


## prototype and prototypal inheritance

Everything is an object within Javascript

# OBJECT

Object.__proto__ = function () {[native code]}

Object.__proto__.__proto__ === Object.prototype 
Object.__proto__.__proto__.__proto__ === Object.prototype.__proto__ is null


# ARRAY

arr = [1, 2]

arr.reverse().toString(); // [2, 1] => '2, 1'

arr.__proto__[Array].__proto__[Object].__proto__[null];

so, first arr  using its own prototype to get the required property/method from "Array" then it looks for "toString method" from its parent "__proto__" i.e. Object's prototype

# FUNCTION

function fun () {}

fun.__proto__ === Function.prototype function () {[native code]}
fun.prototype = {constructor: f}

fun.__proto__.__proto__ === fun.prototype.__proto__ is same as Object's prototype
fun.__proto__.__proto__.__proto__ === fun.prototype.__proto__.__proto__ is null

an instance of object, array of function has its own prototype i.e. "__proto__" & it holds the properties/methods from its direct parent and then if the required property is not found there it goes up to its parent

<B>This is what called prototype chain<B>

<I>Prototypal Inheritance<I>


## asynchronous programming
Promise is an object that represents the eventual completion of an asynchronous task
it has mainly two properties: PromiseState["pending" | "fulfilled" | "rejected"] - PromiseResult

Why do we use Promise than callback?

1) Promise is immutable that means when a Promise is resolved (either "fulfilled" or "rejected"), it can't be
changed which means "A Promise is immutable after resolved/settled".

2) The then() and catch() methods of Promise are used to handle callbacks that executes when it is settled or resolved.

3) it solves the issue of inversion of control and callback hell

4) chainable, nesting can be done in Promises and with the help of that we can return the values in each individual chain

# Why use async await? async await vs promise

async/await is just syntactic sugar over Promise, and it makes the code more synchronous looking

## loading javascript within html: async vs defer

# <script src=""></script>: normal 

with this as html parsing line by
as html parsing line by line when it sees a <script> tag it pauses the html parsing, download the javascript then executes that, and then it resumes html parsing 


# <script async src=""></script>: async
as html parsing line by line when it sees a script tag it doesn't pause html parsing while javascript downloaded parallelly at background, then when javascript downloaded whether its before html parsing is done or after, it will totally stop the html parsing to execute the script and then HTML resumes parsing again.  


# <script defer src=""></script> : defer
as html parsing line by line when it sees a script tag it doesn't pause html parsing while javascript being downloaded then when html parsing fully done, after that it executes that script tags in order. 


[//]: # (https://www.youtube.com/watch?v=IrHmpdORLu8)
