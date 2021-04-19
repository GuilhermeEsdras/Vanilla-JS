/*
 * Complete the Rectangle function
 */
function Rectangle(a = 0, b = 0) {
    return {
        length: a,
        width: b,
        perimeter: 2*(a+b),
        area: a*b
    }
}

console.log(Rectangle(4, 5));
console.log(Rectangle(4, 5).length);
console.log(Rectangle(4, 5).width);
console.log(Rectangle(4, 5).perimeter);
console.log(Rectangle(4, 5).area);