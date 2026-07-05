package main

import "fmt"

func findDuplicates(nums []int) []int {
	result := []int{}

	for _, num := range nums {
		index := abs(num) - 1

		if nums[index] < 0 {
			result = append(result, index+1)
		} else {
			nums[index] = -nums[index]
		}
	}

	return result
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func main() {
	nums := []int{4, 3, 2, 7, 8, 2, 3, 1}

	result := findDuplicates(nums)

	fmt.Println(result)
}

//time complexity: O(n)
//space complexity: O(1) (excluding the output array)
