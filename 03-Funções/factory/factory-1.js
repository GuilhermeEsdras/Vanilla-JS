// Uma função factory é uma função que retorna um objeto

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// Factory simples
function criarPessoa() {
    return {
        nome: 'Gui',
        sobrenome: 'Esdras'
    }
}

console.log(criarPessoa());
