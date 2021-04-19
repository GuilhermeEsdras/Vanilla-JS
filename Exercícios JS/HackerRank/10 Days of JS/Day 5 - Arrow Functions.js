/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const isEven = (a) => a % 2 == 0 ? 1 : 0
    return nums.map((v) => isEven(v) ? 2*v : 3*v)
}

const arr = [1, 2, 3, 4, 5]

console.log(arr);
console.log(modifyArray(arr));