const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`);
}

var i = 0;
for (;;i++) {
    if (i == 2 || i == 7)
    continue;
    console.log(i);

    if (i == 10) break;
}