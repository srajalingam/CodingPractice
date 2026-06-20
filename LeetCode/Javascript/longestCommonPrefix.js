//For the vertical scanning solution:

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
}
strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))

//output : flo

//Time Complexity: O(n × m)
//Space Complexity: O(1)