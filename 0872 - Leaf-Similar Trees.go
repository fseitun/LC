package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func leafSimilar(root1 *TreeNode, root2 *TreeNode) bool {
	first := leafs(root1)
	second := leafs(root2)

	if len(first) != len(second) {
		return false
	}

	for i, firstVal := range first {
		if firstVal != second[i] {
			return false
		}
	}
	return true
}

func leafs(root *TreeNode) []int {
	left := []int{}
	right := []int{}

	if root == nil {
		return []int{}
	}

	if root.Left != nil {
		left = leafs(root.Left)
	}

	if root.Right != nil {
		right = leafs(root.Right)
	}

	if root.Left == nil && root.Right == nil {
		return []int{root.Val}
	}

	return append(left, right...)
}
