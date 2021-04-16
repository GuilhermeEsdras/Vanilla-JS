function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    // Escreva seu código aqui
    switch (operacao) {
        case "+":
            return numero + outroNumero
        case "-":
            return numero - outroNumero
        default:
            return 0
    }
}

/* .::Meus Testes::. */
console.log(calculadoraAdicaoSubtracao(5, 10, ""));