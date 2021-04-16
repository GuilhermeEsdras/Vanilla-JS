const fs = require('fs'); // módulo nativo do node: file system
const { padStart } = require('lodash');

// __dirname = diretório atual
const caminho  = __dirname + '/arquivo.json'

/* síncrono... */
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

/* assincrono */
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})


const config = require('./arquivo.json')
console.log(config.db);

fs.readdir(__dirname, (err, arquivo) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivo);
})