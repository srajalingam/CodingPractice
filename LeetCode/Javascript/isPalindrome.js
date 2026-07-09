function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

console.log(isPalindrome(1221)); 

//Time: O(log₁₀ n) because each iteration removes one digit from x.
//Space: O(1) because only a few variables are used.