/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(lengths = []) {
        this.lengths = lengths
    }

    perimeter() {
        return this.lengths.reduce((a, b) => a + b, 0)
    }
}

let triangle = new Polygon([3, 4, 5])

console.log(triangle.perimeter());