/*

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
*/

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

// Example usage:
//console.log(twoSum([2, 7, 11, 15,7,1,8], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
// console.log(twoSum([3, 3], 6)); // Output: [0, 1]   

//time complexity: O(n)
//space complexity: O(n)



// Two pointer approach
// allways should sorted order other wise above methode map should be used 
function twoSumTwoPointer(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        }
        if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return [];
}

console.log(twoSumTwoPointer([1, 2, 4, 7, 11],9))
// time complexity: O(nlogn) due to sorting
// space complexity: O(1)