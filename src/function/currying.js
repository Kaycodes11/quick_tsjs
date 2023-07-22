// # without currying

function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(10, 15 + 20));

// currying takes one argument at a time & return a new fn which expects the next argument
function currySum(x) {
    return function(y) {
        return function (z) {
            // return fn, fn(), primitive, class
            return x + y + z;
        }
    }
}

currySum(10)(15)(20);


const curry = (x) => (y) => (z) => x + y + z;

const evaluate2 = (mode) => (a) => (b) => {
    switch (mode) {
        case "add":
            return a + b;
        case 'subtract':
            return a - b;  
        default:
            console.error("not supported");
            break;
    }
}

function evaluate(mode) {
    return function(a) {
        return function(b) {
            switch (mode) {
                case "add":
                    return a + b
                case "subtract":    
                  return a -  b;
                default:
                    console.error('not supported');
                    break;
            }
        }
        
    }
}

const evaluateNow = evaluate('add');
evaluate(2)(5);
evaluate(14)(2);

// # infinite currying

function addCurry(a) {
    // console.log(arguments, Array.from(arguments));
    return function (b) {
      // here, implement infinite currying
      if (b) return addCurry(a + b);
      return a;
    };
}

console.log(addCurry(5)(2)(6)(7)());


// convert f(a, b, c, d) => f(a)(b)(c)(d): Example 1

function curryFn(func) {
    // func = someValue, and it has three parameter so func.length = 4
    return function curriedFunc(...args) {
        console.log(args.length, func.length);
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                // here next refers  to next invocation's value or next argument
                // since it has recursion to understand better use pen + paper and debugger
                return curriedFunc(...args, ...next);
            }
            
        }
    }
}

// convert f(a, b, c, d) => f(a)(b)(c)(d): Example 2
function curry(unCurriedFn) {
    return function (...args) {
        // bind(thisArg, fnArg)
        return args.length >= unCurriedFn.length ? unCurriedFn(...args): curry(unCurriedFn.bind(unCurriedFn, ...a))
    }
}

const sum_ = (a, b, c, d) => a + b + c + d;
const totalSum = curryFn(sum_); // f curriedFunc(...args) {}
const totalSum2 = curry(sum_); // f curriedFunc(...args) {}

// this totalSum will be invoked four times
console.log(totalSum2(1,2,3,4));   
console.log(totalSum2(1)(2,3,4));  
console.log(totalSum2(1,2)(3,4));  
console.log(totalSum2(1,2,3)(4));  
console.log(totalSum2(1)(2)(3,4)); 
console.log(totalSum2(1)(2)(3)(4));



