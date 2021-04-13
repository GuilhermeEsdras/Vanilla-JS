const sep = s => console.log("---");
/* --------- */

const aprovados = ['Agatha', 'Aldo', 'Darla', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}: ${nome}`);
})

sep()

aprovados.forEach(nome => console.log(nome))

sep()

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)
