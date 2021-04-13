const pessoa = {
    nome: 'Guilherme',
    idade: 2,
    peso: 25
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

// usando destructure
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // false ele não enumera
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa)); // se enumerable fosse falso, não exibiria

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena o1, o2, ... à dest (sobrepõe a = 1 para a = 4)