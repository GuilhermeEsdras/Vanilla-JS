const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() // remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton') // adiciona na primeira pos
console.log(pilotos);

// slice pode add e remover elementos

// add
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir da 2 pos, adiciona elementos
console.log(pilotos);

// remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // 4 n entra
console.log(algunsPilotos2);