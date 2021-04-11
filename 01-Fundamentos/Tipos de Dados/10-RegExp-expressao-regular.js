var regexpLiteral = /gui/
var regexpConstrutor = new RegExp("Gui")

var stringNome = "O Guilherme"
var stringNome2 = "O guilherme"

console.log(regexpLiteral.test(stringNome)) // false (não encontrou "gui")
console.log(regexpLiteral.test(stringNome2)) // true (encontrou "Gui")

console.log(regexpConstrutor.exec(stringNome)) // exibe tipo um json com o index onde encontrou "Gui"