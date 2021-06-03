var Fila = /** @class */ (function () {
    function Fila(capacidade) {
        if (capacidade === void 0) { capacidade = Infinity; }
        this.capacidade = capacidade;
        this.armazem = [];
    }
    Fila.prototype.enfileira = function (item) {
        if (!(this.tamanho() === this.capacidade)) {
            this.armazem.push(item);
        }
    };
    Fila.prototype.desenfileira = function () {
        return this.armazem.shift();
    };
    Fila.prototype.tamanho = function () {
        return this.armazem.length;
    };
    return Fila;
}());
var fila = new Fila(10);
fila.enfileira(3);
fila.enfileira(8);
fila.enfileira(12);
