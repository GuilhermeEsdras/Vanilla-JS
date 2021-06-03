interface InFila<T> {
    enfileira(item: T): void;
    desenfileira(): T;
    tamanho(): number;
}

class Fila<T> implements InFila<T> {
    private armazem: T[] = [];

    constructor(private capacidade: number = Infinity) { }

    enfileira(item: T): void {
        if (!(this.tamanho() === this.capacidade)) {
            this.armazem.push(item);
        }
    }

    desenfileira(): T | undefined {
        return this.armazem.shift();
    }

    tamanho(): number {
        return this.armazem.length;
    }
}

let fila: Fila<number> = new Fila(10);
fila.enfileira(3);
fila.enfileira(8);
fila.enfileira(12);
