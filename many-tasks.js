/* Task 1
 * Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 * Solution:
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] === undefined ? 0 : ++map[nums[i]];
    }
    for (var i in map) {
        if (map[i] === 0) {
            return parseInt(i, 10);
        }
    }
};
