package main

import "fmt"

// Node represents a BST node
type Node struct {
	Value int
	Left  *Node
	Right *Node
}

// BST represents the Binary Search Tree
type BST struct {
	Root *Node
}

// Insert adds a new value to the BST
func (bst *BST) Insert(value int) bool {
	newNode := &Node{Value: value}

	// If tree is empty
	if bst.Root == nil {
		bst.Root = newNode
		return true
	}

	current := bst.Root

	for {
		// Duplicate value
		if value == current.Value {
			return false
		}

		if value < current.Value {
			if current.Left == nil {
				current.Left = newNode
				return true
			}
			current = current.Left
		} else {
			if current.Right == nil {
				current.Right = newNode
				return true
			}
			current = current.Right
		}
	}
}

// Find searches for a value in the BST
func (bst *BST) Find(value int) *Node {
	if bst.Root == nil {
		return nil
	}

	current := bst.Root

	for current != nil {
		if value < current.Value {
			current = current.Left
		} else if value > current.Value {
			current = current.Right
		} else {
			return current
		}
	}

	return nil
}

// BFS traverses the tree level by level
func (bst *BST) BFS() []int {
	if bst.Root == nil {
		return []int{}
	}

	var data []int
	var queue []*Node

	queue = append(queue, bst.Root)

	for len(queue) > 0 {
		// Remove first element (dequeue)
		node := queue[0]
		queue = queue[1:]

		data = append(data, node.Value)

		if node.Left != nil {
			queue = append(queue, node.Left)
		}

		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}

	return data
}

func main() {
	tree := &BST{}

	tree.Insert(10)
	tree.Insert(8)
	tree.Insert(5)
	tree.Insert(12)
	tree.Insert(13)
	tree.Insert(2)
	tree.Insert(6)

	fmt.Printf("%+v\n", tree)

	// Find existing value
	node := tree.Find(12)
	if node != nil {
		fmt.Println("Found:", node.Value)
	} else {
		fmt.Println("Not Found")
	}

	// Find non-existing value
	node = tree.Find(20)
	if node != nil {
		fmt.Println("Found:", node.Value)
	} else {
		fmt.Println("Not Found")
	}

	fmt.Println(tree.BFS())
}
