function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365

    return diasDoAno * idadeEmAnos
}

let result = converterIdadeEmAnosParaDias(25)
console.log(result);
result = converterIdadeEmAnosParaDias(70)
console.log(result);
