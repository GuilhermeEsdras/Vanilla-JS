var conta = ['', '', ''];

function efetuaOp(op) {
    return ( eval(`${parseInt(conta[0], 2)}${op}${parseInt(conta[2], 2)}`) ).toString(2);
}

document.getElementById('btn0').addEventListener('click', () => {
    document.getElementById('res').innerHTML += '0';
    if (conta[1] == '') conta[0] += '0';
    else conta[2] += '0';
})

document.getElementById('btn1').addEventListener('click', () => {
    document.getElementById('res').innerHTML += '1';
    if (conta[1] == '') conta[0] += '1';
    else conta[2] += '1';
})

document.getElementById('btnClr').addEventListener('click', () => {
    document.getElementById('res').innerHTML = '';
    conta = ['', '', ''];
})

document.getElementById('btnEql').addEventListener('click', () => {
    document.getElementById('res').innerHTML = `${efetuaOp(conta[1])}`
})

document.getElementById('btnSum').addEventListener('click', () => {
    document.getElementById('res').innerHTML += '+';
    conta[1] = '+';
})

document.getElementById('btnSub').addEventListener('click', () => {
    document.getElementById('res').innerHTML += '-';
    conta[1] = '-';
})

document.getElementById('btnMul').addEventListener('click', () => {
    document.getElementById('res').innerHTML += '*';
    conta[1] = '*';
})

document.getElementById('btnDiv').addEventListener('click', () => {
    document.getElementById('res').innerHTML += '/';
    conta[1] = '/';
})