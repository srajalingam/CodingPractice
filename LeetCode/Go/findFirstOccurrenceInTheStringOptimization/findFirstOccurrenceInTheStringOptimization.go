package main

import "fmt"

func findFirstOccurrenceInTheStringOptimization(haystack string, needle string) int {

	for i := 0; i <= len(haystack)-len(needle); i++ {

		found := true

		for j := 0; j < len(needle); j++ {
			if haystack[i+j] != needle[j] {
				found = false
				break
			}
		}

		if found {
			return i
		}
	}

	return -1
}

func main() {
	fmt.Println(findFirstOccurrenceInTheStringOptimization("sadbutsad", "sad"))  // 0
	fmt.Println(findFirstOccurrenceInTheStringOptimization("leetcode", "leeto")) // -1
	fmt.Println(findFirstOccurrenceInTheStringOptimization("hello", "ll"))       // 2
}
