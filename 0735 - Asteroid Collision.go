package main

import "fmt"

func asteroidCollision(asteroids []int) []int {
	stack := []int{}

	for _, asteroid := range asteroids {
		if asteroid > 0 {
			stack = append(stack, asteroid)
		} else {
			for len(stack) > 0 && stack[len(stack)-1] > 0 {
				top := stack[len(stack)-1]
				if top+asteroid < 0 {
					stack = stack[:len(stack)-1]
				} else if top+asteroid == 0 {
					stack = stack[:len(stack)-1]
					asteroid = 0
					break
				} else {
					asteroid = 0
					break
				}
			}

			if asteroid != 0 {
				stack = append(stack, asteroid)
			}
		}
	}
	return stack
}

func main() {
	params := []int{5, 10, -5}
	fmt.Println(params, "expect [5 10]", "recieved", asteroidCollision(params))
	params = []int{8, -8}
	fmt.Println(params, "expect []", "recieved", asteroidCollision(params))
	params = []int{10, 2, 1, 3}
	fmt.Println(params, "expect [10 2 1 3]", "recieved", asteroidCollision(params))
	params = []int{-2, -1, 1, 2}
	fmt.Println(params, "expect [-2 -1 1 2]", "recieved", asteroidCollision(params))
	params = []int{5, 1, -1, 5}
	fmt.Println(params, "expect []", "recieved", asteroidCollision(params))
}
