package main

import (
	"fmt"
)

func x() {
}

func main() {
	param = "2[3[a]b]"
	fmt.Println(param, "expect aaabaaab", "recieved", x(param))
}
