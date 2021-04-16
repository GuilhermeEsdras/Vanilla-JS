// console.log(global);

/* vulnerável, pode alterar valor externamente! */
// global.MinhaApp = {
//     saudacao() {
//         return 'Estou em todos os lugares!'
//     },
//     nome: 'Nome do Sistema'
// }

/* 'freezado', não pode alterar valor externamente */
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Nome do Sistema'
})