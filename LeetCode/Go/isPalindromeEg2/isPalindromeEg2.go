package main

import (
	"fmt"
	"regexp"
	"strings"
)

func isPalindromeEg2(s string) bool {
	// Convert to lowercase
	s = strings.ToLower(s)

	// Remove non-alphanumeric characters
	re := regexp.MustCompile(`[^a-z0-9]`)
	s = re.ReplaceAllString(s, "")

	left := 0
	right := len(s) - 1

	for left < right {
		if s[left] != s[right] {
			return false
		}
		left++
		right--
	}

	return true
}

func main() {
	fmt.Println(isPalindromeEg2("A man, a plan, a canal: Panama")) // true
	fmt.Println(isPalindromeEg2("raja"))                           // false
}