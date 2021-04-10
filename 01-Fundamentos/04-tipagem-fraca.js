/**
 * JavaScript é uma linguagem de tipagem fraca
 * pode-se atribuir valores de vários tipos (int, string, bool, etc.) a mesma variável
 */

let qualquer = 'Legal' // Aspas simples '' e duplas "" não tem diferença, ambos significam texto/string livre
console.log(qualquer)
console.log(typeof qualquer) // string

qualquer = 3.1415
console.log(qualquer)
console.log(typeof qualquer) // number


/* Dicas */
// Evitar nomes genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkkk

