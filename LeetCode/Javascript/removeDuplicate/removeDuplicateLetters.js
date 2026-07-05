function removeDuplicateLetters(s) {
    const count = new Map();

    // Count frequency
    for (const ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    const stack = [];
    const visited = new Set();

    for (const ch of s) {
        count.set(ch, count.get(ch) - 1);

        if (visited.has(ch)) {
            continue;
        }

        while (
            stack.length &&
            ch < stack[stack.length - 1] &&
            count.get(stack[stack.length - 1]) > 0
        ) {
            visited.delete(stack.pop());
        }

        stack.push(ch);
        visited.add(ch);
    }

    return stack.join("");
}

// Example
console.log(removeDuplicateLetters("bcabc")); // "abc"