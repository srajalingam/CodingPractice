function reverseInt(x) {
    let rev = 0;

    while (x > 0) {
        let digit = x % 10;      // Get last digit
        rev = rev * 10 + digit;  // Add it to the reversed number
        x = Math.floor(x / 10);  // Remove last digit
    }

    return rev;
}

console.log(reverseInt(123)); // 321


function reverseNegativeHandle(x) {
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let rev = 0;

    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x / 10);
    }

    return rev * sign;
}

console.log(reverseNegativeHandle(-123)); 

//Time: O(log n)
//Space: O(1)
