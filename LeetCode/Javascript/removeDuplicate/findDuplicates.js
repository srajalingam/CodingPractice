function findDuplicates(nums) {
    const result = [];

    for (let num of nums) {
        const index = Math.abs(num) - 1;

        if (nums[index] < 0) {
            result.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }

    return result;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDuplicates(nums)); // [2, 3]


//time complexity: O(n)
//space complexity: O(1) (excluding the output array)