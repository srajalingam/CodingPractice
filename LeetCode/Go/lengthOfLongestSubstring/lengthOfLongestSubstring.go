package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
	left := 0
	maxLength := 0

	// character -> last index
	charMap := make(map[byte]int)

	for right := 0; right < len(s); right++ {

		if index, exists := charMap[s[right]]; exists && index >= left {
			left = index + 1
		}

		charMap[s[right]] = right

		if right-left+1 > maxLength {
			maxLength = right - left + 1
		}
	}

	return maxLength
}

func lengthOfLongestSubstringUsingset(s string) int {
	set := make(map[byte]bool)
	left := 0
	maxLength := 0

	for right := 0; right < len(s); right++ {

		for set[s[right]] {
			delete(set, s[left])
			left++
		}

		set[s[right]] = true

		if right-left+1 > maxLength {
			maxLength = right - left + 1
		}
	}

	return maxLength
}

func main() {
	fmt.Println(lengthOfLongestSubstring("abcabcbb")) // 3
	fmt.Println(lengthOfLongestSubstring("bbbbb"))    // 1
	fmt.Println(lengthOfLongestSubstring("pwwkew"))   // 3
	fmt.Println(lengthOfLongestSubstring(""))         // 0
	fmt.Println(lengthOfLongestSubstring("abcabcbb")) // 3
}
