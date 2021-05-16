const idades = [20, 34, [35, 60, [70, 40, [50, 60]]]];

console.log(idades.flat());
console.log(idades.flat(2));
console.log(idades.flat(3));

const nums = [ [25, 83], [12], [80, 39, [21], 10, 8, [6, 3, 4, [8, 9, 10, [2, 2], [5]]]] ];
console.log(nums.flat(4));