let chars = [5, 6, 8, 5, 6, 3, 2, 2, 1, 8, 5];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

// console.log(uniqueChars);
// console.log(chars.filter((c, i) => chars.indexOf(c) === i).sort((a, b) => a-b).reverse()[1]);
console.log([...new Set(chars)].sort((a, b) => a-b).reverse()[1]);