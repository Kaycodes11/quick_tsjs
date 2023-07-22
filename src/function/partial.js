const multiply = (a, b) => a * b;

const prefillFn = (fn, prefilledValue) => {
    const inner = liveInput => {
        const output = fn(liveInput, prefilledValue);
        return output;
    }
    return inner;
}

const multiplyByTwo = prefillFn(multiply, 2);
const result = multiplyByTwo(5);