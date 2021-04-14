/* operador ...rest(juntar)/spread(espalhar) */
/* usar rest como parâmetro de função */

/* usar spread com objeto */
const funcionario = { nome: 'Guilhermne', salario: 12345.67 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

/* usar spread com array */
const grupoA = ['B', 'C', 'D']
const grupoFinal = ['A', ...grupoA, 'E']
console.log(grupoFinal);

/* rest + spread */
function somarNumeros(...operandos) { // rest, joga os elementos passados num array geral chamado 'operandos'
    let resultado = operandos.reduce(function (acumulador, valor) {
        return acumulador += valor;
    })

    return resultado
}

let numeros = [1, 2, 3, 4]

console.log(somarNumeros(...numeros)); // spread, pega e joga de um em um no parâmetro da função
