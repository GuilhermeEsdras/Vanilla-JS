/*
 * Complete a função 'vezesLetraAparece' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. frase (string)
 *  2. letra (string)
 */

function vezesLetraAparece(frase, letra) {
    // Escreva seu código aqui
    return frase.split(`${letra}`)
}

console.log(vezesLetraAparece("Guilherme", "e"));