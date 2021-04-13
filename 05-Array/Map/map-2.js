const sep = s => console.log("---");
/* ---- */

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const jparse = e => JSON.parse(e)
const getPreco = e => e.preco

let results = carrinho.map(jparse).map(getPreco)
console.log(results);
