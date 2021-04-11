/* síncrona */
var teste = 'test'

console.log(teste)

for (let index = 0; index < 10; index++) {
    console.log(index)
}

console.log('fim')

console.log('--------')

/* assíncrona */

console.log(teste)

setTimeout(function() {
    console.log('esperando...')
}, 2000)

console.log('fim')