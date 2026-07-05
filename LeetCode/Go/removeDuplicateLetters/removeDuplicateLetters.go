package main

import "fmt"

func removeDuplicateLetters(s string) string {
	count := make(map[byte]int)

	// Count frequency
	for i := 0; i < len(s); i++ {
		count[s[i]]++ // Count frequency of each character //output: map[97:1 98:1 99:1]
	}

	stack := []byte{}
	visited := make(map[byte]bool)

	for i := 0; i < len(s); i++ {
		ch := s[i]

		count[ch]--

		if visited[ch] {
			continue
		}

		for len(stack) > 0 &&
			ch < stack[len(stack)-1] &&
			count[stack[len(stack)-1]] > 0 {

			visited[stack[len(stack)-1]] = false
			stack = stack[:len(stack)-1]
		}

		stack = append(stack, ch)
		visited[ch] = true
	}

	return string(stack)
}

func main() {
	fmt.Println(removeDuplicateLetters("bcabc"))
}
