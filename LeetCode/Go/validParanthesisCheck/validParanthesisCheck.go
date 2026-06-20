package main

import "fmt"

func validParanthesisCheck(s string) bool {
	stack := []byte{}

	m := map[byte]byte{
		')': '(',
		'}': '{',
		']': '[',
	}

	for i := 0; i < len(s); i++ {
		ch := s[i]

		if ch == '(' || ch == '{' || ch == '[' {
			stack = append(stack, ch)
		} else {
			if len(stack) == 0 {
				return false
			}

			top := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			if top != m[ch] {
				return false
			}
		}
	}

	return len(stack) == 0
}

func main() {
	fmt.Println(validParanthesisCheck("()"))     // true
	fmt.Println(validParanthesisCheck("()[]{}")) // true
	fmt.Println(validParanthesisCheck("(]"))     // false
	fmt.Println(validParanthesisCheck("([)]"))   // false
	fmt.Println(validParanthesisCheck("{[]}"))   // true
}
