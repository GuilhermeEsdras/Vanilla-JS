// novo recurso do ES2015

const pessoa = {
    nome: 'Guilherme',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Operador Destructure { } -> Extrai dados/variáveis específicos de dentro de um objeto 
const { nome, idade } = pessoa /* extrai nome e idade de pessoa para variáveis externas individuais */
console.log(nome, idade)

/* extrai os valores e define um novo nome para eles */
var { nome: n, idade: i = 2 } = pessoa // "idade: i = 2" -> caso não encontre um valor em "idade", atribua 2
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa /* caso não exista bemHumorado, atribua true */
console.log(sobrenome, bemHumorado) // undefined true

/* Retirando dados de dentro de um objeto dentro de um objeto */
const { endereco: { logradouro, numero, cep } } = pessoa /* Apenas cria logradouro, numero e cep (retira de dentro de endereco) */
