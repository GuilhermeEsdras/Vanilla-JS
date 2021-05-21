class Pessoa {
    nome: string

    constructor(pessoa: string) {
        this.nome = pessoa;
    }

    exibirNome() {
        return `Meu nome eh ${this.nome}`;
    }
}

let objpessoa = new Pessoa("Guilherme");
console.log(objpessoa.exibirNome());
