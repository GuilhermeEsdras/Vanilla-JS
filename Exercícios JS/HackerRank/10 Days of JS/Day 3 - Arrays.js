/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    return nums.filter((e, i) => nums.indexOf(e) === i).sort((a, b) => a-b).reverse()[1]
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));