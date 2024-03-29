const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} // antigamente
const obj2 = { a, b, c } // nova sintaxe
console.log(obj1, obj2);

const nomeAttr = 'nota'
const valorAttr = 7.87

/* antes */
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

/* depois */
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);


const obj5 = {
    funcao1: function () {
        // ... antigamente
    },
    funcao2() {
        // ... nova sintaxe
    }
}

console.log(obj5)