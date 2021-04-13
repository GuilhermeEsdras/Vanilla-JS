// IIFE -> Immediately Invoked Function Expression
// Expressão de função imediatamente invocada
// Função autoinvocada

(function () {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente'); // foge do escopo global
})()