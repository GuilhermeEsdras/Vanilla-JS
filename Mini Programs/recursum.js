function soma(arr, n) {
    if (n <= 0) return 0;
    return arr[n-1] + sum(arr, n-1);
}
console.log(soma([2, 3, 4], 1));