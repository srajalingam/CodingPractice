//remove duplicates from sorted array

function removeDuplicates(nums) {
    if (nums.length === 0) return [];

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return nums.slice(0, i + 1);
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]



