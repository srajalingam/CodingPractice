package main

import "fmt"

func removeDuplicates(nums []int) []int {
	if len(nums) == 0 {
		return []int{}
	}
	i := 0
	for j := 1; j < len(nums); j++ {
		if nums[i] != nums[j] {
			i++
			nums[i] = nums[j]
		}
	}
	return nums[:i+1]
}

func main() {
	nums := []int{1, 1, 2, 2, 3}

	result := removeDuplicates(nums)

	fmt.Println(result) // [1 2 3]
}
