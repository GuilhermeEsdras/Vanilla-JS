function largestOfFour(arr) {
    for (let ar in arr) {
        var novo = arr[ar].reduce(
            function(a, b) { 
                return Math.max(a, b); 
            }
        )
        arr[ar] = novo;
    }
  return arr;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
