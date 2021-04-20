
function getMaxLessThanK(n, k) {
    let max = 0
    for (var a = 1; a < n; a++) {
        for (var b = 2; b <= n; b++) {
            if (a === b) continue;
            else {
                var result = a & b
                if (result < k) max == 0 ? max = result : (result > max ? max = result : 0)
            }
        }
    }
    return max
}

console.log(getMaxLessThanK(2, 2));