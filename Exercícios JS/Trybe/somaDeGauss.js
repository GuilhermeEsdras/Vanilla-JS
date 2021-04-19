/*
 * Complete a função 'somaDeGauss' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita um número inteiro para o parâmetro numeroMaximo.
 */

function somaDeGauss(numeroMaximo) {
    // Escreva seu código aqui
    var soma = numeroMaximo, i = numeroMaximo
    while (i--) soma += i
    return soma;
}

/* .::Meus Testes::. */
console.log(somaDeGauss(10));