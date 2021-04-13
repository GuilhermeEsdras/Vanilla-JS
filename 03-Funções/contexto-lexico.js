const valor = 'Global'

function minhaFuncao() {
    console.log(valor); // "salva" o valor 'Global'
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // printa 'Global'