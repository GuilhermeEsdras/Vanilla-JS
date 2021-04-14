/* let e var */
{
    var a = 2
    let b = 3
    console.log(a);
    console.log(b); 
}
console.log(a); // normal
// console.log(b); // erro

/* Template String */
const produto = 'iPad'
console.log(`${produto} é caro!`);

/* Destructuring */
const [l, e, ...tras] = "Guilherme" // l = G, e = u, tras = ilherme
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y); // x == 1, y == 3, 2 é ignorado

const { idade: i, nome } = { nome: 'Gui', idade: 10 }
console.log(i, nome);
