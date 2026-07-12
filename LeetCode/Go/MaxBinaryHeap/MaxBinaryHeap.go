package main

import (
	"fmt"
)

type MaxBinaryHeap struct {
	Values []int
}

// Constructor
func NewMaxBinaryHeap() *MaxBinaryHeap {
	return &MaxBinaryHeap{
		Values: []int{41, 39, 33, 18, 27, 12},
	}
}

// Insert a new element
func (h *MaxBinaryHeap) Insert(element int) {
	h.Values = append(h.Values, element)
	h.bubbleUp()
}

// Bubble Up
func (h *MaxBinaryHeap) bubbleUp() {
	idx := len(h.Values) - 1
	element := h.Values[idx]

	for idx > 0 {
		parentIdx := (idx - 1) / 2
		parent := h.Values[parentIdx]

		if element <= parent {
			break
		}

		// Swap
		h.Values[parentIdx] = element
		h.Values[idx] = parent

		idx = parentIdx
	}
}

func main() {
	heap := NewMaxBinaryHeap()

	heap.Insert(55)

	fmt.Println(heap.Values)
}
