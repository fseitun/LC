package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return dfs(root)
}

func dfs(node *TreeNode) int {
	if node == nil {
		return 0
	}

	leftDepth := dfs(node.Left)
	rightDepth := dfs(node.Right)

	return max(leftDepth, rightDepth) + 1
}
