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


/* Task 2
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 *
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * 
 * For the purpose of this problem, we define empty string as valid palindrome.
 *
 * Solution:
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s) { return true; }
    
    var arr = [], length = s.length, i = 0, length2, charcode;
    for (i; i < length; i++) {
        charcode = s[i].charCodeAt(0);
        if ((charcode >= 97 && charcode <= 122) || (charcode >= 65 && charcode <= 90) || (charcode >= 48 && charcode <= 57)) {
            arr.push(s[i].toLowerCase());
        }
    }
    length = arr.length;
    
    if (length % 2 == 0) { 
        length2 = length/2; 
    } else {
        length2 = (length - 1)/2
    }
    
    for (i = 0; i < length2; i++) {
        if (arr[i] !== arr[length - i - 1]) {
            return false;
        }
    }
    return true;
};
