package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	var reversedHead *ListNode

	for head != nil { // 1 -> 2 -> 3 -> 4 -> 5 | 2 -> 3 -> 4 -> 5 | 3 -> 4 -> 5 | 4 -> 5 | 5 | nil
		aux := head.Next // 2 -> 3 -> 4 -> 5 | 3 -> 4 -> 5 | 4 -> 5 | 5 | nil
		// i want head.Val but need to rewrite head.Next
		head.Next = reversedHead // nil | 1 -> nil | 2 -> 1 -> nil | 3 -> 2 -> 1 -> nil | 4 -> 3 -> 2 -> 1 -> nil
		reversedHead = head      // 1 -> nil | 2 -> 1 -> nil | 3 -> 2 -> 1 -> nil | 4 -> 3 -> 2 -> 1 -> nil

		// restore head.Next
		head = aux // 2 -> 3 -> 4 -> 5 | 3 -> 4 -> 5 | 4 -> 5 | 5 | nil
	}

	return reversedHead
}
