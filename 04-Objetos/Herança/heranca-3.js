const pai = { nome: 'Guilherme', corCabelo: 'preto' }
const son = Object.create(pai)
son.nome = 'tal'
console.log(son.corCabelo);

const son2 = Object.create(pai, {
    nome: { value: 'Tal2', writable: false, enumerable: true }
})

console.log(son2.nome);
son2.nome = 'Tataltal'
console.log(`${son2.nome} tem cabelo ${son2.corCabelo}`);

console.log(Object.keys(son));
console.log(Object.keys(son2));

for(let key in son2) {
    son2.hasOwnProperty(key) ? // checa se o atributo é herdado ou 'exclusivo'
        console.log(key) : console.log(`Por herença: ${key}`);
}