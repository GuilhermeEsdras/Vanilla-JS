/**
 * Hoisting ou içamento é uma técnica que o interpretador do JavaScript usa para elevar para o topo do escopo as declarações de 
 * variáveis e funções que estejam espalhados pelo código, desta forma você pode referenciar uma função ou variável em determinada
 * linha do código mesmo uqe as referidas declarações estejam em linhas posteriores.
 *  */

console.log('a =', a) // undefined, mas não gera erro
var a = 2
console.log('a =', a)

// console.log('b =', b) // erro, b not defined
let b = 2 
console.log('b =', b)