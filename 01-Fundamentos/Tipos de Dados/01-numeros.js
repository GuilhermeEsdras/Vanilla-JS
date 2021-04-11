const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // true
console.log(Number.isInteger(peso2)) // true

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Arredondar para 2 casas decimais | Não altera o valor da variável

console.log('\n- Convertendo:')
console.log(media.toString()) // Converte para string
console.log(media.toString(2)) // Converte para binário
console.log(media.toString(8)) // Converte para octal
console.log(media.toString(16)) // Converte para hexadecimal

console.log('\n- Tipos')
console.log(Number.isInteger(media)) // false
console.log(typeof media) // number
console.log(typeof Number) // function

console.log('\n- MAX e MIN')
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)