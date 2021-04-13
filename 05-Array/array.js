console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('B', 'C', 'A')
console.log(aprovados);

aprovados = ['a', 'b', 'c']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'E'
aprovados.push('AVSDA')
console.log(aprovados.length);

aprovados[9] = 'R'
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined); // true

console.log(aprovados);
aprovados.sort()
console.log(aprovados);

delete aprovados[1] // vira undefined
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['a', 'c', 'b', 'd']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // exclui 2 elementos a partir da posição 1 e inclui os elementos1 e 2
console.log(aprovados);