function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

let result = cumprimentar("Guilherme")
console.log(result);
