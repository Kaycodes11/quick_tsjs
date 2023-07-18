## declarative programming:  
just tell me what to do whereas imperative programming is about what & how to do. forEach declarative vs for loop is imperative

## pure function : given the same input it'll return the same output

basically, it can only work on the data that's given to the very function itself, it can't work on any external data. it is solely depends upon input. Any variable, function that's being used within then if that's not given as input then it wouldn't be pure function.

```javascript

// pure
function add (x, y) {
    return x + y 
}

// impure

function add (x, y) {
    // since console.log not given as input 
    console.log(x + y);
    return x + y 
}

```

## immutability
Rather than modifying/mutating data directly from source, use the immutable methods

## side effects and pure function

a side effect when function relies on, or modifies something outside its parameters to do something. like console.log or reading/writing data from a variable outside of function's arguments.


## composition


## pipe compose

## curry

## partial

## lodash ramda