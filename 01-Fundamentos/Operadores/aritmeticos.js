const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d // 3 + 5 + 1 + 15
const subtracao = d - b // 15 - 5
const multiplicacao = a * b // 3 * 5
const divisao = d / a // 15 / 3
const modulo = a % 2 // resto da divisão de 3 / 2

/**
 * O operador de Exponenciação tornou-se disponível à partir da versão ES7
 * Antes, era necessário utilizar a função pow da biblioteca Math (Math.pow(2, 3) -> onde 3 é o expoente)
 * */
const exponenciacao = b ** a // 5^3
let base = 2
base **= -3 // 2^(-3) = 0.125


console.log(soma, subtracao, multiplicacao, divisao, modulo, exponenciacao, base)