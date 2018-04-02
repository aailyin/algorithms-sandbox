// LeetCode tasks:

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

/*
https://leetcode.com/problems/restore-ip-addresses/description/

Given a string containing only digits, restore it by returning all possible valid IP address combinations.
For example:
Given "25525511135",
return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/
/**
 * @param {string} str
 * @return {string[]}
 */
var restoreIpAddresses = function(str) {
    const result = [];
        const length = str.length;
        
        // Use recursive function because the result can be calculated as a tree where the initial
        // parameter is the first element of string
        check(0, 0, '');

        function check(start, level, previous){
            let i = 0;
            let num;

            if (level === 3) {
                num = str.substring(start);
                // if it's the last group and it isn't '0' then stop checking
                if (num[0] == '0' && num.length > 1) {
                    return;
                }
                if (num && num < 256) {
                    result.push(`${previous}.${num}`);
                }
                return;                
            }
            num = str.substring(start, start + 1);
            if (parseInt(num, 10) == 0) {
                // decompose the tree for the next group because this group is '0'
                check(start + 1, level + 1, level === 0 ? `${num}`: `${previous}.${num}`);
            } else {
                while (num.length < 4 && num < 256 && start + i + 1 < length) {
                    // decompose the tree for the other groups
                    check(start + i + 1, level + 1, level === 0 ? `${num}`: `${previous}.${num}`);
                    i++;
                    num = str.substring(start, start + i + 1);
                }
            }
        }

        return result;
};

/* https://leetcode.com/problems/remove-duplicates-from-sorted-array/
    Given a sorted array, remove the duplicates in-place such that each element appear only once
    and return the new length. Do not allocate extra space for another array, you must do this by 
    modifying the input array in-place with O(1) extra memory.
*/
// My solution:
var removeDuplicates = function(nums) {
    var sum = 0;
    var j, k;
    var current = nums[nums.length - 1];
    
    for (var i = nums.length - 1; i >= 0; i--) { 
        if (nums[i] === current && i != 0) {
            sum++;
        } else {
            if (i === 0 && nums[i] === current) {
                sum++;                
            }
            if (sum > 1) {
                j = sum - 1;
                k = 1;
                while (i + j + 1 <= nums.length) {
                    nums[i + k] = nums[i + j + 1];
                    j++;
                    k++;
                }
                nums.length = nums.length - (sum - 1); 
            }
            current = nums[i];
            sum = 1;
        }
    }
    return nums.length;
};

// If to read the task more carefully, then you'll understand that we don't need to modify
// array and the solution may be like this:
var removeDuplicates = function(nums) {
    var a = 0;
    for (var i=1; i < nums.length; i++) {
        if (nums[a] != nums[i]) {
            a++; 
            nums[a] = nums[i];
        }
    }
    return a+1;
};


// https://leetcode.com/problems/merge-sorted-array/
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold 
// additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

// My solution:
var merge = function (nums1, m, nums2, n) {
    var i = 0, j = 0, k = 0, temp, prev, length;
    
    nums1.length = m;
    
    while (j < n) {
        if (i < nums1.length) {
             while (nums1[i] < nums2[j]) {
                i++;
             }
             if (i < nums1.length) {
                 k = i;
                 prev = nums1[k];
                 nums1[i] = nums2[j];
                 k++;
                 length = nums1.length + 1;
                 while (k < length) {
                     temp = nums1[k];
                     nums1[k] = prev;
                     prev = temp;
                     k++;
                 }
             } else {
                 nums1.push(nums2[j]);
             }
        } else {
            nums1.push(nums2[j]);
        }
        j++;
    }
};

// good practice from submissions
var merge = function(nums1, m, nums2, n) {
    var i=m-1;
    var j=n-1;
    var k= m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k--] = nums1[i--];
        }else{
            nums1[k--] = nums2[j--];
        }
    }
    while(j>=0){
        nums1[k--] = nums2[j--];
    }
};


