/**
 * os.EOL == End Of Line / '\n' / quebra de linha  do Sistema Operacional
 * É necessário, pois, no Windows, ao digitar o nome (linha 16), ele também captura a quebra de linha e armazena na variável 'nome'
 * Com os.EOL, posso usar a função replace e substituir em qualquer sistema operacional a quabra de linha por um caracter vazio
 * fazendo o programa rodar normalmente (sem capturar a quebra de linha)
 *  */
const os = require('os')

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo);

if (anonimo) {
    process.stdout.write(`Eae Anônimo!!!${os.EOL}`)
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(`${os.EOL}`, '')

        process.stdout.write(`Eae ${nome}!!!${os.EOL}`)
        process.exit()
    })
}