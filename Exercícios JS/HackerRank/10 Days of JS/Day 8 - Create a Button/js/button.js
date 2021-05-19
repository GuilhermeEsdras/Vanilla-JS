var count = 1;
document.querySelector('#btn').onclick = function () {
    this.innerHTML = `${count++}`;
}