const pessoa = "Guilherme"

console.log(pessoa.charAt(4)) // h
console.log(pessoa.charAt(10)) // não gera erros, apenas printa vazio/nada
console.log(pessoa.charCodeAt(3)) // pega o valor na tabela Unicode / ASCII
console.log(pessoa.indexOf('l'))

console.log(pessoa.substring(1)) // do 1 até o último
console.log(pessoa.substring(0, 3)) // Gui

console.log('Pessoa '.concat(pessoa).concat("!"))
console.log('Pessoa ' + pessoa + '!')

console.log(pessoa.replace('i', 'g')) // substitui 'i' por 'g'
console.log(pessoa.replace(/\e/, 'g')) // expressão regular: substitui o primeiro 'e' que encontrar por 'g'
console.log(pessoa.replace(/\e/g, 'g')) // expressão regular: substitui todos os 'e's que encontrar por 'g'

console.log('Ana, Maria, João'.split(',')) // converte para array separando pela ','