package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func pairSum(head *ListNode) int {
	slow, fast := head, head

	for fast.Next != nil && fast.Next.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	current := slow.Next
	var reversedHalf *ListNode

	for current != nil {
		aux := current.Next
		current.Next = reversedHalf
		reversedHalf = current
		current = aux
	}

	var maxSum int
	for reversedHalf != nil && head != nil {
		localMax := head.Val + reversedHalf.Val

		if localMax > maxSum {
			maxSum = localMax
		}
		reversedHalf = reversedHalf.Next
		head = head.Next
	}

	return maxSum
}
