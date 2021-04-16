function ehPalindromo(palavra) {
    return palavra.toLowerCase().split("").reverse().join("") === palavra.toLowerCase() ? "SIM" : "NAO"
}
console.log(ehPalindromo("Natan"))