// # implement memoization

function memo(fn, context) {
    const result = {};

    return function (...args) {
        var argsCache = JSON.stringify(args);
        if(!result[argsCache]) {
            result[argsCache] = fn.call(context || this, ...args);
        } else {
            result[argsCache];
        }
    }

}

const clumsyProduct = (num1, num2) => {
    for (let index = 0; index < 100000000; index++) {}
    return num1 * num2;
}

const memoizedClumsyProduct = memo(clumsyProduct);

console.time('first start');
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd('first done');

console.time('second start');
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd('second done');