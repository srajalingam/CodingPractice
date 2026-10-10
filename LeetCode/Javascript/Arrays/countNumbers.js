//countNumbers using map

function countNumbers(arr) {
    const countMap = new Map();

    for (const num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    return countMap;
}

console.log(countNumbers([1, 2, 2, 3, 3, 3, 4])); // Output: Map { 1 => 1, 2 => 2, 3 => 3, 4 => 1 }
//time complexity is O(n) and space complexity is O(n)


//countNumbers using object

function countNumbersUsingObject(arr) {
    const countObj = {};

    for (const num of arr) {
        if (countObj[num]) {
            countObj[num]++;
        } else {
            countObj[num] = 1;
        }
    }

    return countObj;
}
console.log(countNumbersUsingObject([1, 2, 2, 3, 3, 3, 4])); // Output: { 1: 1, 2: 2, 3: 3, 4: 1 }
//time complexity is O(n) and space complexity is O(n)