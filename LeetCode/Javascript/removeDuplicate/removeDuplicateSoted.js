var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

     return nums.slice(0, i + 1);
};

function removeDuplicatesSet(nums) {
    return [...new Set(nums)];
}

function removeDuplicatesUseObject(nums) {
    const seen = {};
    const result = [];

    for (const num of nums) {
        if (!seen[num]) {
            seen[num] = true;
            result.push(num);
        }
    }

    return result;
}


var result=removeDuplicates([1,1,2,2,3])
console.log(result)
// Time: O(n)
// Space: O(1) 

console.log(removeDuplicatesSet([1,1,2,2,3]));
// Time: O(n)
// Space: O(n)


const nums = [1, 1, 2, 2, 3, 3, 4];

const unique = removeDuplicatesUseObject(nums);

console.log("Original:", nums);
console.log("Unique:", unique);

// Time: O(n) — one pass through the array.
// Space: O(n) — the seen object and result array can each grow with the number of unique elements.



