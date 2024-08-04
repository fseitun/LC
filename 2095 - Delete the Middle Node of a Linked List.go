package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteMiddle(head *ListNode) *ListNode {
	if head.Next == nil {
		return nil
	}

	fastPtr := head
	slowPtr := head
	var previousPtr *ListNode

	for fastPtr != nil && fastPtr.Next != nil {
		fastPtr = fastPtr.Next.Next
		previousPtr = slowPtr
		slowPtr = slowPtr.Next
	}

	previousPtr.Next = slowPtr.Next

	return head
}
