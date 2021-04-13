// diferenças
console.log(soma(3, 4)); // normal
// console.log(sub(3, 4)); // erro, deve-se chamar após declaração
// console.log(mult(3, 4)); // erro, deve-se chamar após declaração

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4));

// named function expression
const mult = function multi(x, y) {
    return x * y
}
console.log(mult(3, 4));