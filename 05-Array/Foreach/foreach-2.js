const sep = s => console.log("---");
/* --------- */

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Darla', 'Raquel']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}: ${nome}`);
})

sep()

const arr = ['a', 'b', 'c'].forEach2(function (nome, indice) {
    console.log(`${indice + 1}: ${nome}`);
});