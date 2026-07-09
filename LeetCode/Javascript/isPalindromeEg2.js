var isPalindromeEg2 = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindromeEg2("A man, a plan, a canal: Panama"))
console.log(isPalindromeEg2('raja'))

//Time: O(n) (each character is processed at most once)
//Space: O(n) (no extra string is created)
