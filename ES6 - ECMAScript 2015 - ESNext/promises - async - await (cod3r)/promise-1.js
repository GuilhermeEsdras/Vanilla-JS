let p = new Promise(function (cumprirPromessa) {
    // cumprirPromessa(3)
    // cumprirPromessa(3, 4) // só se passa apenas um valor para uma promise
    // cumprirPromessa({
    //     x: 3,
    //     y: 4
    // }) // forma alternativa de passar mais de um valor, passando um objeto
    // cumprirPromessa(['A', 'B', 'C']) // outra forma
    cumprirPromessa(['Guilherme', 'Esdras'])
})

function primeiroElemento(arrayOuString) {
    return arrayOuString[0]
}
const letraMinuscula = letra => letra.toLowerCase()

p
    // .then(valor => valor[0])
    // .then(primeiro => primeiro[0])
    // .then(letra => letra.toLowerCase())
    // .then(letraMinuscula => console.log(letraMinuscula))
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
// o resultado de um then é passado para o próximo