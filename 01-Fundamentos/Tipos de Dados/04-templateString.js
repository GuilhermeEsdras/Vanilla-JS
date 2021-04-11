const nome = 'Guilherme'
const concat = 'Olá ' + nome + '!'

const template = `
    Olá 
    ${nome}!`

console.log(concat, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = txt => txt.toUpperCase()
console.log(`Ei ${up(nome)}!`)