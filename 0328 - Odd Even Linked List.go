package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func oddEvenList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	oddHead := head
	oddTail := oddHead
	evenHead := oddHead.Next
	evenTail := evenHead

	for evenTail != nil && evenTail.Next != nil {
		oddTail.Next = evenTail.Next
		oddTail = oddTail.Next
		evenTail.Next = oddTail.Next
		evenTail = evenTail.Next
	}
	oddTail.Next = evenHead

	return oddHead
}
