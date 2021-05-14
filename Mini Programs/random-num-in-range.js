function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // retorna um inteiro aleatório entre myMin e myMax
}

console.log(randomRange(2, 8));