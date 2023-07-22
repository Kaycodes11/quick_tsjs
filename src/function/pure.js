/*
pure function is a function that accept an input & 
  "it does not use / modify any value out of its scope"
  similarly, return value shouldn't affect any value outside of its scope

it is predictable and without side-effect (using or modifying data out of its scope)

[NOTE]: To use a value from out of its cope, either take in parameter or copy

*/

let array = [ 1, 2, 3, 4];

function addItemImpure(elem) {
    // used a value out of its scope
    array.push(elem);
}

function addItemPure(a, elem) {
    return [...a, elem]
}

addItemPure(array, 5);