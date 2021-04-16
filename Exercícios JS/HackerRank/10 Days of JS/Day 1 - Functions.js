/*
 * Create the function factorial here
 */

function factorial(n) {
    return n === 1 ? n : n * factorial(n-1)
}

/* .::Meus Testes::. */
console.log(factorial(3));