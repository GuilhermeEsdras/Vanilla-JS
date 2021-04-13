const sequencia = {
    _valor: 1, // convenção

    /* JS não aceita sobrecarga de métodos (métodos com mesmo nome, mas, parametros diferentes) exceto nesse caso: */
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000 // automaticamente chama o set
console.log(sequencia.valor);
sequencia.valor = 900 // devido a verificação do set, não permite
console.log(sequencia.valor);