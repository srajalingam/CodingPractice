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


//remove duplicate unsorted array

function removeDuplicatesUnsorted(nums) {
    const uniqueSet = new Set(nums);
    // return [...new Set(uniqueSet)];
    return Array.from(uniqueSet);
}

console.log(removeDuplicatesUnsorted([4, 2, 1, 3, 2, 4, 5])); // Output: [4, 2, 1, 3, 5]


function removeDuplicates(nums) {
    const seen = new Set();
    const result = [];

    for (let j = 0; j < nums.length; j++) {
        if (!seen.has(nums[j])) {
            seen.add(nums[j]);
            result.push(nums[j]);
        }
    }

    return result;
}

console.log(removeDuplicates([3, 1, 2, 1, 3, 4, 2]));



