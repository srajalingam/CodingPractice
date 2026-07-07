package main

func reverseNegativeHandle(x int) int {
	sign := 1
	if x < 0 {
		sign = -1
		x = -x // Make positive
	}

	rev := 0

	for x > 0 {
		digit := x % 10
		rev = rev*10 + digit
		x = x / 10
	}

	return rev * sign
}
