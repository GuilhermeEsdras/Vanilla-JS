const contadorA = require('./instancia-unica')
const contadorB = require('./instancia-unica')

const contadorC = require('./instancia-nova')() // invoca a função factory e logo imediatamente executa-a, retornando o objeto
const contadorD = require('./instancia-nova')() // invoca a função factory e logo imediatamente executa-a, retornando o objeto

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor);