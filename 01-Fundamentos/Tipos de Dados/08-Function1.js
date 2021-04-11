// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // 2 + 10 = 12 | soma os dois primeiros e ignora o restante
imprimirSoma() // NaN

// Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // 2 + 0 = 2
