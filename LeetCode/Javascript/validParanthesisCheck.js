function validParanthesisCheck(s) {
    const stack = [];
    
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(validParanthesisCheck("()"));      // true
console.log(validParanthesisCheck("()[]{}"));  // true
console.log(validParanthesisCheck("(]"));      // false
console.log(validParanthesisCheck("([)]"));    // false
console.log(validParanthesisCheck("{[]}"));    // true


//Time: O(n)
//Space: O(n) (worst case all opening brackets)