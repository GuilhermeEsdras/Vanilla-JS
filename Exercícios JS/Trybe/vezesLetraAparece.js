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
    return frase // .toLowerCase() <- caso queira ignorar maiúsculas e minúsculas (anti-case sensitive)
            .split(`${letra}`).length - 1
}

/* .::Meus Testes::. */
console.log(vezesLetraAparece("Avada kedavra", "a"));