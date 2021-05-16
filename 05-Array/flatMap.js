const arr = [1, 2, 3, 4];

console.log(arr.flatMap((elemento, index) => elemento * index));
console.log(arr.flatMap((elemento, index) => [elemento * index]));
console.log(arr.flatMap((elemento, index) => [[elemento * index]]));