package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func createList(nums []int) *ListNode {
	dummy := &ListNode{}
	current := dummy

	for _, num := range nums {
		current.Next = &ListNode{Val: num}
		current = current.Next
	}

	return dummy.Next
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := &ListNode{}
	current := dummy
	carry := 0

	for l1 != nil || l2 != nil || carry != 0 {
		x, y := 0, 0

		if l1 != nil {
			x = l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			y = l2.Val
			l2 = l2.Next
		}

		sum := x + y + carry
		carry = sum / 10

		current.Next = &ListNode{
			Val: sum % 10,
		}
		current = current.Next
	}

	return dummy.Next
}

func printList(head *ListNode) {
	for head != nil {
		fmt.Print(head.Val, " ")
		head = head.Next
	}
	fmt.Println()
}

func runExample() {
	l1 := createList([]int{7, 8, 9})
	l2 := createList([]int{4, 5, 6})

	result := addTwoNumbers(l1, l2)

	printList(result)
}

func main() {
	runExample()
}
