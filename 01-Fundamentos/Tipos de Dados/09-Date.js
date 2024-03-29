/* Date não tem sintaxe literal, deve ser instanciado com o operador new Date() */

/**
 * new Date() -> Retorna um Object Date
 * new Date(valor) -> Valor inteiro em milissegundos com base em 01/01/1970
 * new Date(dataString) -> Date Time String Format (YYY-MM-DDTHH:mm:ss.sssZ)
 * new Date(ano, mês, dia, hora, minuto, segundo, milissegundo)
 */

var data = new Date()
console.log(typeof data)
console.log(data)

var dataString = new Date("2019-10-21")
console.log(dataString)

console.log(dataString.getFullYear())
console.log(dataString.getMonth()+1)
console.log(dataString.getDay())

let dataParam = new Date(2019, 10, 21)
console.log(dataParam)