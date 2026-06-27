package main

import "fmt"

type SingleListNode struct {
	Val  int
	Next *SingleListNode
}

func MergeTwoLists(list1 *SingleListNode, list2 *SingleListNode) *SingleListNode {
	// Create a dummy node. It helps us easily build the merged list.

	dummy := &SingleListNode{}

	// 'current' always points to the last node in the merged list.

	current := dummy

	// Continue while both lists still have nodes.

	for list1 != nil && list2 != nil {
		// Compare the current nodes of both lists.
		if list1.Val <= list2.Val {
			// Attach list1's current node.
			current.Next = list1

			// Move list1 to its next node.
			list1 = list1.Next
		} else {
			current.Next = list2
			list2 = list2.Next
		}
		// Move current forward because a new node was added.
		current = current.Next
	}

	// One list is finished.
	// Attach whichever list still has remaining nodes.
	if list1 != nil {
		current.Next = list1
	} else {
		current.Next = list2
	}

	// Skip the dummy node and return the real head.
	return dummy.Next

}

func printMergeList() {
	// Create list1: 1 -> 2 -> 4
	list1 := &SingleListNode{Val: 1}
	list1.Next = &SingleListNode{Val: 2}
	list1.Next.Next = &SingleListNode{Val: 4}

	// Create list2: 1 -> 3 -> 4
	list2 := &SingleListNode{Val: 1}
	list2.Next = &SingleListNode{Val: 3}
	list2.Next.Next = &SingleListNode{Val: 4}

	// Merge the lists
	result := MergeTwoLists(list1, list2)

	// Print the merged list
	for result != nil {
		fmt.Printf("%d ", result.Val)
		result = result.Next
	}
}
