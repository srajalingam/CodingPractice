package main

import "fmt"

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if val, exists := m[complement]; exists {
			return []int{val, i}
		}
		m[num] = i
	}
	return nil
}

func twoSumTwoPointer(nums []int, target int) []int {
	left := 0
	right := len(nums) - 1

	for left < right {
		sum := nums[left] + nums[right]

		if sum == target {
			return []int{left, right}
		}

		if sum < target {
			left++
		} else {
			right--
		}
	}

	return []int{}
}

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	result := twoSum(nums, target)
	fmt.Println(result)

	fmt.Println(twoSumTwoPointer([]int{1, 2, 4, 7, 11}, 9))
}
