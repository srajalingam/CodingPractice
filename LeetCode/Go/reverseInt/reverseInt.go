package main

import "fmt"

func reverseInt(x int) int {
	rev := 0

	for x > 0 {
		digit := x % 10      // Get last digit
		rev = rev*10 + digit // Add it to the reversed number
		x = x / 10           // Remove last digit
	}

	return rev
}

func main() {
	fmt.Println(reverseInt(123))             // 321
	fmt.Println(reverseNegativeHandle(-123)) // -321
	fmt.Println(reverseNegativeHandle(456))  // 654
}
