/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    var P = expressions[1]
    var A = expressions[0]
    var s1 = (P + Math.sqrt(P**2 - 16 * A)) / 4
    var s2 = (P - Math.sqrt(P**2 - 16 * A)) / 4
    return [s1, s2].sort((a, b) => a-b)
}

var [s1, s2] = [140, 48].sort()
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log(x, y);