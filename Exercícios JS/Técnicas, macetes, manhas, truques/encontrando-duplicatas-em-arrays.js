/* .::Usando indexOf::. */
/**
 * 
 * indexOf: Encontra a posição da PRIMEIRA ocorrência de um determinado elemento, ou seja,
 *          se o index de um determinado valor de um array for diferente da posição retornada pela função indexOf,
 *          é porquê esse elemento já existe, ou seja, é uma duplicata.
 * 
 * filter:  Filtra um array de acordo com os critérios da função passada como argumento.
 * 
 * */
let chars = ['A', 'B', 'A', 'C', 'B'];
console.log('Array com duplicatas:');
console.log(chars);

chars.forEach((c, index) => {
    console.log(`Char: \'${c}\' | index: ${index} | indexOf (primeira ocorrência): ${chars.indexOf(c)}`);
});

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log('Elementos cujo index e indexOf são iguais: ' + uniqueChars);
console.log('Array sem duplicatas:');
console.log(uniqueChars);


console.log('--------------------------------------------');
/* .::Usando ...new Set::. */
/**
 * 
 * ...new Set  : Transforma um array em um Set, uma sequência de caracteres sem repetições.
 * [...new Set]: Converte o Set gerado em um array.
 * 
 * */
 chars = ['A', 'B', 'A', 'C', 'B'];

 console.log([...new Set(chars)]);