package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func goodNodes(root *TreeNode) int {
	good := 0
	traverse(root, root.Val, &good)
	return good
}

func traverse(root *TreeNode, branchMax int, goodPtr *int) {
	if root == nil {
		return
	}

	if root.Val >= branchMax {
		branchMax = root.Val
		*goodPtr++
	}

	traverse(root.Left, branchMax, goodPtr)
	traverse(root.Right, branchMax, goodPtr)
}
